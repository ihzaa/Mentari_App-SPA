<style scoped>
.product-card {
    max-width: 20rem;
}
.product-card:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 lightgreen;
}
.header {
    background-color: white;
}
.info {
    height: 110px;
}
.harga {
    font-size: 18px;
    font-weight: 1000 !important;
}
.card-body {
    padding: 0;
}
.card-footer {
    background-color: white;
}
@media only screen and (max-width: 700px) {
    .product-card {
        max-width: 40rem;
    }
}
</style>

<template>
    <div class="mx-5 my-3">
        <b-row class="justify-content-around" align-v="center">
            <b-card
                class="product-card my-2 p-3 mx-1"
                v-for="product in productInfo"
                @click="goToDetail(product.item_id)"
                v-bind:key="product.item_id"
                name=""
                data-aos="zoom-in-up"
            >
                <b-card-img-lazy
                    width="100%"
                    height="200"
                    v-if="product.path != null"
                    v-lazy="global + product.path"
                    top
                ></b-card-img-lazy>
                <b-card-img-lazy
                    width="100%"
                    height="200"
                    v-else
                    src="/frontend/images/no-image-available.png"
                    style="border: 1px solid lightgray"
                    top
                ></b-card-img-lazy>
                <b-card-header class="header text-center" tag="header">
                    <h5>
                        <strong>{{ product.name }}</strong>
                    </h5>
                    <p style="margin-bottom: -10px">
                        {{ product.category_name }}
                    </p>
                </b-card-header>
                <b-card-body>
                    <b-card-text
                        class="info"
                        v-if="product.description.length < 180"
                    >
                        {{ product.description }}
                    </b-card-text>
                    <b-card-text class="info" v-else>
                        {{ product.description.substring(0, 180) + "..." }}
                    </b-card-text>
                    <b-card-text class="harga text-right">
                        <p>Rp. {{ formatPrice(product.price) }}</p>
                    </b-card-text>
                </b-card-body>
                <b-card-footer class="card-footer" tag="footer">
                    <b-button
                        @click.stop="addToCart(product.item_id)"
                        variant="success"
                    >
                        <b-cart-check-fill style="width: 20px; height: 20px">
                        </b-cart-check-fill>
                    </b-button>
                </b-card-footer>
            </b-card>
        </b-row>
        <div class="text-center my-4" v-show="moreExists">
            <b-button variant="success" @click="loadMore" v-if="!loading">
                Tampilkan Lebih Banyak
            </b-button>
            <b-button
                variant="success"
                style="font-size:16px"
                disabled
                align-v="center"
                v-else
            >
                <b-spinner small></b-spinner>
                Loading...
            </b-button>
        </div>
    </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import User from "../user";
import { EventBus } from "../event-bus";

AOS.init();

export default {
    data() {
        return {
            searchvalue: "",
            categoryvalue: "",
            productInfo: [],
            busy: false,
            limit: 8,
            global: window.Global.imgPath,
            moreExists: true,
            nextPage: 0,
            loading: false,
            searchProduct: false
        };
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        goToDetail(proId) {
            this.$router.push({ name: "detail", params: { id: proId } });
        },
        loadProduct: async function() {
            try {
                let response = await axios.post(`/api/product`, {
                    search: this.searchvalue,
                    category: this.categoryvalue
                });
                this.productInfo = response.data.data.data;

                // if (
                //     response.data.data.current_page <
                //     response.data.data.last_page
                // ) {
                //     this.moreExists = true;
                //     this.nextPage = response.data.data.current_page + 1;
                // } else {
                //     this.moreExists = false;
                // }
            } catch (err) {
                console.log(err);
            }
        },
        addToCart(id) {
            if (_.isEmpty(User.data)) {
                this.$router.push({ name: "login" });
            } else {
                this.$root.$refs.Loading.show();

                axios
                    .get(window.Global.baseUrl + "/api/add/to/cart/" + id)
                    .then(resp => {
                        this.$root.$refs.Nav.cartCounter = resp.data;
                    })
                    .catch(err => {
                        console.log(err);
                    })
                    .finally(() => {
                        this.$root.$refs.Loading.hide();
                    });
            }
        },
        loadMore: async function() {
            this.loading = true;
            await axios
                .get(`/api/product?page=` + this.nextPage)
                .then(response => {
                    console.log(response);

                    response.data.data.data.forEach(data => {
                        this.productInfo.push(data);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        filteredProduct() {
            this.searchProduct = true;
            axios
                .get(`/api/search?name=` + this.seachvalue)
                .then(response => {
                    if (
                        response.data.data.current_page <
                        response.data.data.last_page
                    ) {
                        this.moreExists = true;
                        this.nextPage = response.data.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }

                    response.data.data.data.forEach(data => {
                        this.productInfo.push(data);
                    });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.searchProduct = false;
                });
        }
    },
    computed: {},
    created() {
        EventBus.$on("search-value", value => {
            this.searchvalue = value;
        });
        EventBus.$on("category-value", value => {
            this.categoryvalue = value;
        });
        this.loadMore();
    }
};
</script>
