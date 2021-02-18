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
        <Navigation />
        <div class="mx-4 my-3">
            <b-card class="p-3" style="height: 480px">
                <b-row class="justify-content-around">
                    <b-col class="slider" cols="5">
                        <Slider />
                    </b-col>
                    <b-col class="productDesc" cols="7"
                        >ini Id Produk : {{ detailInfo.name }}</b-col
                    >
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
    async mounted() {
        try {
            let response = await axios.get(
                window.Global.baseUrl + `/api/detail/` + this.$route.params.id
            );
            console.log(response.data.data[0]);
            this.detailInfo = response.data.data[0];
        } catch (err) {
            console.log(err);
        }
    }
};
</script>
