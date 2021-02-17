<style scoped>
.img-wrapper img {
    margin: auto;
    max-height: 400px;
    background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
<template>
    <div>
        <div class="img-wrapper">
            <VueSlickCarousel v-bind="settings" class="w-100">
                <div><img src="https://picsum.photos/300/300/?image=23" /></div>
                <div><img src="https://picsum.photos/300/500/?image=25" /></div>
                <div><img src="https://picsum.photos/400/300/?image=20" /></div>
                <div><img src="https://picsum.photos/300/100/?image=19" /></div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
                lazyLoad: "ondemand",
                arrows: true,
                dots: true,
                fade: true,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        };
    }
};
</script>
