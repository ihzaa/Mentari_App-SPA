<template>
    <div>
        <header>
            <Navigation />
        </header>
        <Carousel />
        <div class="my-4">
            <h1 align="center">Produk Kami</h1>
        </div>
        <Product />
    </div>
</template>

<script>
import Navigation from "./Navigation";
import Carousel from "./Carousel";
import Product from "./Product";

export default {
    components: {
        Navigation,
        Carousel,
        Product
    }
};
</script>
