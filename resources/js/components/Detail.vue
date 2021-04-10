<style scoped>
body {
    min-height: 75rem;
    padding-top: 80px;
}
.slider {
    min-width: 310px;
}
.btn {
    border: var(--primarycolor);
    background-color: var(--primarycolor);
}
.btn:hover {
    background-color: rgb(41, 119, 209);
}

@media only screen and (max-width: 700px) {
    .detail-header {
        flex-direction: column;
    }
    .detail-header h1 {
        font-size: 22px;
    }
    .detail-header p,
    .detail-body h5 {
        font-size: 14px;
    }
    .detail-body h4 {
        font-size: 18px;
    }
    .cart {
        flex-direction: column;
    }
    .product-description {
        padding: 30px 0 20px 0 !important;
    }
}
</style>
<template>
    <div>
        <div class="mx-4 my-3">
            <b-card class="p-3">
                <b-row class="justify-content-around">
                    <b-col class="slider" cols="5">
                        <Slider />
                    </b-col>
                    <b-col class="product-description p-3" cols="7">
                        <div
                            class="detail-header d-flex justify-content-between"
                        >
                            <h1 class="align-self-center">
                                <strong>{{ detailInfo.name }}</strong>
                            </h1>

                            <b-badge
                                variant="success"
                                class="align-self-center"
                                style="font-size:16px"
                            >
                                Promo
                            </b-badge>
                            <p class="align-self-center">
                                {{ detailInfo.category_name }}
                            </p>
                        </div>
                        <hr class="my-1" />
                        <div class="detail-body my-3">
                            <h5>{{ detailInfo.description }}</h5>

                            <h3
                                class="mt-4 text-right"
                                v-if="detailInfo.promo == null"
                            >
                                <strong>
                                    Rp. {{ formatPrice(detailInfo.price) }}
                                </strong>
                            </h3>
                            <div class="mt-4 text-right" v-else>
                                <h3>
                                    <strong
                                        >Rp.
                                        {{
                                            formatPrice(detailInfo.promo)
                                        }}</strong
                                    >
                                </h3>
                                <p style="font-size:18px; margin-top:-10px">
                                    <strong>
                                        <s class="text-danger"
                                            >Rp.
                                            {{ formatPrice(detailInfo.price) }}
                                        </s>
                                    </strong>
                                </p>
                            </div>

                            <div
                                class="cart d-flex justify-content-between my-5"
                            >
                                <h5
                                    class="align-self-center"
                                    v-if="detailInfo.stock != 0"
                                >
                                    Persediaan barang :
                                    <strong>{{ detailInfo.stock }}</strong>
                                </h5>
                                <h5 class="align-self-center" v-else>
                                    Persediaan barang :
                                    <strong class="text-danger">Kosong</strong>
                                </h5>
                                <b-button
                                    @click="addToCart(id)"
                                    class="align-self-center"
                                    v-if="detailInfo.stock != 0"
                                >
                                    Tambah Keranjang
                                    <b-cart-check-fill
                                        style="width: 20px; height: 20px"
                                    >
                                    </b-cart-check-fill>
                                </b-button>
                                <b-button
                                    variant="secondary"
                                    class="align-self-center"
                                    v-else
                                    disabled
                                >
                                    Tambah Keranjang
                                    <b-cart-check-fill
                                        style="width: 20px; height: 20px"
                                    >
                                    </b-cart-check-fill>
                                </b-button>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>

<script>
import Slider from "./Slider";
import User from "../user";

export default {
    components: {
        Slider
    },
    data() {
        return {
            detailInfo: [],
            id: this.$route.query.id
        };
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
        }
    },
    async mounted() {
        this.$root.$refs.Loading.show();
        await axios
            .post(window.Global.baseUrl + `/api/detail`, { id: this.id })
            .then(response => {
                if (response.data != 0) {
                    this.detailInfo = response.data.data[0];
                } else {
                    this.$router.push({ name: "notfound" });
                }
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                this.$root.$refs.Loading.hide();
            });
    }
};
</script>
