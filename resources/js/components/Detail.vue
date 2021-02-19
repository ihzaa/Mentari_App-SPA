<style scoped>
body {
    min-height: 75rem;
    padding-top: 80px;
}
.slider {
    min-width: 310px;
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
                    <b-col class="productDesc p-3" cols="7">
                        <div
                            class="detail-header d-flex justify-content-between"
                        >
                            <h1>
                                <strong>{{ detailInfo.name }}</strong>
                            </h1>
                            <p class="align-self-center">
                                {{ detailInfo.category_name }}
                            </p>
                        </div>
                        <hr class="my-1" />
                        <div class="detail-body my-3">
                            <h5>{{ detailInfo.description }}</h5>

                            <h4 class="mt-4 text-right">
                                <strong>
                                    Rp. {{ formatPrice(detailInfo.price) }}
                                </strong>
                            </h4>

                            <div
                                class="cart d-flex justify-content-between my-5"
                            >
                                <h5>
                                    Stok barang :
                                    <strong>{{ detailInfo.stock }}</strong>
                                </h5>
                                <b-button href="#" variant="success">
                                    Tambah Keranjang
                                    <font-awesome-icon icon="shopping-cart" />
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
import Navigation from "./Navigation";
import Slider from "./Slider";

export default {
    components: {
        Navigation,
        Slider
    },
    data() {
        return {
            detailInfo: []
        };
    },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        }
    },
    async mounted() {
        try {
            let response = await axios.get(
                window.Global.baseUrl + `/api/detail/` + this.$route.params.id
            );
            this.detailInfo = response.data.data[0];
            console.log(this.detailInfo);
        } catch (err) {
            console.log(err);
        }
    }
};
</script>
