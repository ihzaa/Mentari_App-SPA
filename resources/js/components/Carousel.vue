<style scoped>
@media only screen and (max-width: 700px) {
    .carousel-image {
        height: 150px;
    }
}
</style>

<template>
    <div>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            img-width="1024"
            img-height="350"
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                caption="Tidak ada banner"
                img-blank
                img-alt="Blank image"
                style="height:350px"
                v-if="imgCount == 0"
            ></b-carousel-slide>

            <b-carousel-slide
                v-for="carousel in carouselInfo"
                v-bind:key="carousel.id"
                v-else
            >
                <template v-slot:img>
                    <img
                        class="carousel-image"
                        height="350"
                        width="100%"
                        v-lazy="global.imgPath + carousel.image"
                    />
                </template>
                <h1>{{ carousel.title }}</h1>
                <p>{{ carousel.description }}</p>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
import Axios from "axios";
import global from "../global";

export default {
    data() {
        return {
            slide: 0,
            sliding: null,
            carouselInfo: [],
            imgCount: 0,
            global: null
        };
    },
    async mounted() {
        try {
            let response = await Axios.get(`/api/carousel`);
            this.carouselInfo = response.data.data;
            this.imgCount = response.data.data.lenght;

            this.global = global;
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        onSlideStart(slide) {
            this.sliding = true;
        },
        onSlideEnd(slide) {
            this.sliding = false;
        }
    }
};
</script>
