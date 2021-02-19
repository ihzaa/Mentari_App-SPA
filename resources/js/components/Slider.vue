<style scoped>
.img-wrapper img {
    margin: auto;
    max-height: 400px;
    border: 1px solid lightgreen;
    background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
<template>
    <div>
        <div class="img-wrapper">
            <VueSlickCarousel
                v-bind="settings"
                class="w-100"
                v-if="detailImage.length"
            >
                <div v-for="detailImg in detailImage" :key="detailImg.id">
                    <img v-lazy="global + detailImg.path" />
                </div>
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
            detailImage: [],
            global: window.Global.imgPath,
            settings: {
                lazyLoad: "progressive",
                arrows: true,
                dots: true,
                fade: true,
                infinite: true,
                speed: 100,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        };
    },
    async mounted() {
        try {
            let response = await axios.get(
                window.Global.baseUrl +
                    `/api/detail_image/` +
                    this.$route.params.id
            );
            this.detailImage = response.data.data;
        } catch (err) {
            console.log(err);
        }
    }
};
</script>
