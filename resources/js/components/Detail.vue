<style scoped>
body {
    min-height: 75rem;
    padding-top: 80px;
}
</style>
<template>
    <div>
        <Navigation />
        <div class="mx-4 my-3">
            <b-row>
                <b-col cols="6">cols="6"</b-col>
                <b-col cols="6">cols="6"</b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import Navigation from "./Navigation";
import Carousel from "./Carousel";
import Product from "./Product";

export default {
    components: {
        Navigation
    }
};
</script>
