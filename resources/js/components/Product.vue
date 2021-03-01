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
        <div class="d-flex justify-content-around" v-if="!cekValue">
            <h4 v-if="searchvalue != ''">
                <strong>Pencarian : {{ searchvalue }}</strong>
            </h4>
            <h4 v-else>
                <strong>Pencarian : -</strong>
            </h4>
            <h4 v-if="!cekCategory">
                <strong>Kategori : {{ categoryname }}</strong>
            </h4>
            <h4 v-else>
                <strong>Kategori : -</strong>
            </h4>
        </div>
        <div v-if="!load">
            <div v-if="productList">
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
                            :src="global + product.path"
                            top
                        ></b-card-img-lazy>
                        <b-card-img-lazy
                            width="100%"
                            height="200"
                            v-else
                            loading="lazy"
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
                                {{
                                    product.description.substring(0, 180) +
                                        "..."
                                }}
                            </b-card-text>
                            <b-card-text class="harga text-right">
                                <p>Rp. {{ formatPrice(product.price) }}</p>
                            </b-card-text>
                        </b-card-body>
                        <b-card-footer
                            class="card-footer d-flex justify-content-between"
                            tag="footer"
                        >
                            <b-button
                                @click.stop="addToCart(product.item_id)"
                                variant="success"
                                v-if="product.stock != 0"
                            >
                                <b-cart-check-fill
                                    style="width: 20px; height: 20px"
                                >
                                </b-cart-check-fill>
                            </b-button>
                            <b-button
                                @click.stop=""
                                variant="secondary"
                                v-else
                                disabled
                            >
                                <b-cart-check-fill
                                    style="width: 20px; height: 20px"
                                >
                                </b-cart-check-fill>
                            </b-button>
                            <div
                                class="persediaan text-center"
                                style="margin-top:10px"
                                v-if="product.stock != 0"
                            >
                                <p style="line-height:2px">
                                    Persediaan
                                </p>
                                <p style="line-height:2px">
                                    <strong>{{ product.stock }}</strong>
                                </p>
                            </div>
                            <div
                                class="persediaan text-center"
                                style="margin-top:10px"
                                v-else
                            >
                                <p style="line-height:2px">
                                    Persediaan
                                </p>
                                <p style="line-height:2px">
                                    <strong class="text-danger">Kosong</strong>
                                </p>
                            </div>
                        </b-card-footer>
                    </b-card>
                </b-row>
                <div class="text-center my-4" v-show="moreExists">
                    <b-button
                        variant="success"
                        @click="loadMore"
                        v-if="!loading"
                    >
                        Tampilkan Lebih Banyak
                    </b-button>
                    <b-button
                        variant="success"
                        style="font-size: 16px"
                        disabled
                        align-v="center"
                        v-else
                    >
                        <b-spinner small></b-spinner>
                        Loading...
                    </b-button>
                </div>
            </div>
            <div class="text-center my-5" v-else>
                <p style="font-size:24px!important;line-height:20px">
                    <strong>Produk tidak ditemukan</strong>
                </p>
            </div>
        </div>
        <div class="text-center my-5" v-else>
            <b-spinner style="width: 3rem; height: 3rem;"></b-spinner>
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
            categoryname: "",
            productInfo: [],
            global: window.Global.imgPath,
            moreExists: true,
            productList: true,
            loading: false,
            load: false,
            lastProductId: 0
        };
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        goToDetail(proId) {
            this.$router.push({ name: "detail", query: { id: proId } });
        },
        loadProduct: async function() {
            try {
                this.moreExists = true;
                let response = await axios.post(`/api/product`, {
                    search: this.searchvalue,
                    category: this.categoryvalue,
                    lastId: this.lastProductId
                });
                if (response.data.data.length != 0) {
                    this.productList = true;
                    this.productInfo.push.apply(
                        this.productInfo,
                        response.data.data
                    );
                    this.lastProductId = this.productInfo[
                        this.productInfo.length - 1
                    ].item_id;
                    if (response.data.data.length < 15) {
                        this.moreExists = false;
                    }
                } else {
                    this.productList = false;
                }
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
            await this.loadProduct();
            this.loading = false;

            //   await axios
            //     .get(`/api/product?page=` + this.nextPage)
            //     .then((response) => {
            //       console.log(response);

            //       response.data.data.data.forEach((data) => {
            //         this.productInfo.push(data);
            //       });
            //     })
            //     .catch((err) => {
            //       console.log(err);
            //     })
            //     .finally(() => {
            //       this.loading = false;
            //     });
        },
        async filteredProduct() {
            this.productInfo = [];
            this.lastProductId = 0;
            this.load = true;
            await this.loadProduct();
            this.load = false;
            // console.log(this.load);
            //   axios
            //     .get(`/api/search?name=` + this.seachvalue)
            //     .then((response) => {
            //       if (response.data.data.current_page < response.data.data.last_page) {
            //         this.moreExists = true;
            //         this.nextPage = response.data.data.current_page + 1;
            //       } else {
            //         this.moreExists = false;
            //       }

            //       response.data.data.data.forEach((data) => {
            //         this.productInfo.push(data);
            //       });
            //     })
            //     .catch((err) => {
            //       console.log(err);
            //     })
            //     .finally(() => {
            //       this.searchProduct = false;
            //     });
        }
    },
    watch: {
        searchvalue: function(val) {
            this.filteredProduct();
        },
        categoryvalue: function(val) {
            this.filteredProduct();
        }
    },
    created() {
        EventBus.$on("search-value", value => {
            this.searchvalue = value;
        });
        EventBus.$on("category-value", value => {
            this.categoryvalue = value;
        });
        EventBus.$on("category-name", value => {
            this.categoryname = value;
        });
        this.loadProduct();
    },
    computed: {
        cekValue() {
            return (
                (this.searchvalue == "" && this.categoryvalue == "") ||
                (this.searchvalue == "" && this.categoryvalue == null)
            );
        },
        cekCategory() {
            return this.categoryvalue == "" || this.categoryvalue == null;
        }
    }
};
</script>
