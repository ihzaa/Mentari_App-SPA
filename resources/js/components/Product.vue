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
    height: 50px;
    font-size: 18px;
    font-weight: 1000 !important;
}
.card-body {
    padding: 0;
}
.card-footer {
    background-color: white;
}

/* Ribbon */
.ribbon {
    width: 150px;
    height: 150px;
    overflow: hidden;
    position: absolute;
}
.ribbon::before,
.ribbon::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid green;
}
.ribbon span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: green;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 "Roboto", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
}

/* top right*/
.ribbon-top-right {
    top: -10px;
    right: -10px;
}
.ribbon-top-right::before,
.ribbon-top-right::after {
    border-top-color: transparent;
    border-right-color: transparent;
}
.ribbon-top-right::before {
    top: 0;
    left: 0;
}
.ribbon-top-right::after {
    bottom: 0;
    right: 0;
}
.ribbon-top-right span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
}

@media only screen and (max-width: 700px) {
    .product-card {
        max-width: 40rem;
    }
}
</style>

<template>
    <div class="mx-5 my-3">
        <div class="row" v-if="!cekValue">
            <div class="col-md-6" v-if="searchvalue != ''">
                <h4>
                    <strong>Pencarian : {{ searchvalue }}</strong>
                </h4>
            </div>
            <div class="col-md-6" v-else>
                <h4>
                    <strong>Pencarian : -</strong>
                </h4>
            </div>
            <div class="col-md-6" v-if="!cekCategory">
                <h4>
                    <strong>Kategori : {{ categoryname }}</strong>
                </h4>
            </div>
            <div class="col-md-6" v-else>
                <h4>
                    <strong>Kategori : -</strong>
                </h4>
            </div>
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
                        <div
                            class="ribbon ribbon-top-right"
                            v-if="product.promo != null"
                        >
                            <span>Promo</span>
                        </div>
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
                            <b-card-text
                                class="harga text-right"
                                style="line-height:10px"
                                v-if="product.promo == null"
                            >
                                <p>Rp. {{ formatPrice(product.price) }}</p>
                            </b-card-text>
                            <b-card-text class="harga text-right" v-else>
                                <p>Rp. {{ formatPrice(product.promo) }}</p>
                                <p style="font-size:14px; margin-top:-20px">
                                    <s class="text-danger"
                                        >Rp. {{ formatPrice(product.price) }}</s
                                    >
                                </p>
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
