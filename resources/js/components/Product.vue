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
        <div
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="limit"
        >
            <b-row class="justify-content-around" align-v="center">
                <b-card
                    class="product-card my-2 p-3 mx-1"
                    v-for="product in productInfo"
                    v-bind:key="product.id"
                    name=""
                    data-aos="zoom-in-up"
                >
                    <b-card-img-lazy
                        width="100%"
                        height="200"
                        src="https://picsum.photos/600/400/?image=25"
                        top
                    ></b-card-img-lazy>
                    <b-card-header class="header text-center" tag="header"
                        ><h5>
                            <strong>{{ product.name }}</strong>
                        </h5></b-card-header
                    >
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
                        <b-button href="#" variant="success"
                            ><font-awesome-icon icon="shopping-cart"
                        /></b-button>
                    </b-card-footer>
                </b-card>
            </b-row>
        </div>
    </div>
</template>

<script>
import global from "../global";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default {
    data() {
        return {
            productInfo: [],
            global: null,
            busy: false,
            limit: 8
        };
    },
    // async mounted() {
    //     try {
    //         let response = await Axios.get(`/api/product`);
    //         this.productInfo = response.data.data;

    //         this.global = global;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed(0).replace(".", ",");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        loadMore() {
            console.log("scrolling");
            this.busy = true;
            axios
                .get("/api/product")
                .then(res => {
                    // console.log(res.data);
                    const append = res.data.data.slice(
                        this.productInfo.length,
                        this.productInfo.length + this.limit
                    );
                    this.productInfo = this.productInfo.concat(append);
                    this.busy = false;
                })
                .catch(err => {
                    console.log(err);
                    this.busy = false;
                });
        },
        created() {
            this.loadMore();
            this.global = global;
        }
    }
};
</script>
