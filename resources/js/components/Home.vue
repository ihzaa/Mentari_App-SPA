<template>
    <div>
        <!-- <header>
            <Navigation />
        </header> -->
        <Carousel />
        <div class="my-4">
            <h1 align="center" style="color: var(--primarycolor)">
                <strong>Produk Kami</strong>
            </h1>
            <hr />
        </div>
        <Product />
    </div>
</template>

<script>
// import Navigation from "./Navigation";
import Carousel from "./Carousel";
import Product from "./Product";
export default {
    components: {
        // Navigation,
        Carousel,
        Product
    },
    mounted() {
        this.$root.$refs.Loading.hide();
    }
};
</script>
