<style scoped>
.img-wrapper img {
    margin: auto;
    width: 100%;
    max-height: 400px;
    background-image: linear-gradient(gray 100%, transparent 0);
}
</style>
<template>
    <div>
        <div class="img-wrapper">
            <carousel :perPage="1" v-if="imageCount != 0">
                <slide v-for="slide in detailImage" v-bind:key="slide.id">
                    <img :src="global + slide.path" />
                </slide>
            </carousel>
            <carousel :perPage="1" v-else align="center">
                <slide>
                    <img
                        width="100%"
                        height="280"
                        src="/frontend/images/no-image-available.png"
                    />
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
    components: {
        Carousel,
        Slide
    },
    data() {
        return {
            detailImage: [],
            imageCount: 0,
            global: window.Global.imgPath
        };
    },
    async mounted() {
        try {
            let response = await axios.get(
                window.Global.baseUrl +
                    `/api/detail_image/` +
                    this.$route.query.id
            );
            console.log(response);
            this.detailImage = response.data.data;
            this.imageCount = response.data.data.length;
            console.log(this.detailImage);
        } catch (err) {
            console.log(err);
        }
    }
};
</script>
