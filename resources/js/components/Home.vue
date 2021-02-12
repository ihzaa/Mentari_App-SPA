<template>
    <div>
        <header>
            <Navigation />
        </header>
        <Carousel />
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
