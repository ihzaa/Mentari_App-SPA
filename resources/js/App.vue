<template>
    <div>
        <header>
            <Navigation />
        </header>
        <router-view></router-view>
        <Footer />
        <div
            id="main_loading"
            style="
        display: none;
        background: #504b4b;
        color: black;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 4999;
        top: 0;
        left: 0;
        float: left;
        text-align: center;
        padding-top: 25%;
        opacity: 0.8;
      "
        >
            <div
                class="spinner-border"
                style="width: 5rem; height: 5rem; color: var(--primarycolor)"
                role="status"
            >
                <span class="sr-only">Loading...</span>
            </div>
            <!-- <br />
      Loading... -->
        </div>
    </div>
</template>
<script>
import Footer from "./components/Footer";
import user from "./user";
import Loading from "./loading";
import Navigation from "./components/Navigation";
export default {
    components: { Navigation, Footer },
    data() {
        return {
            user: user
        };
    },
    created() {
        this.$root.$refs.Loading = this;
    },
    methods: {
        show() {
            Loading.show();
        },
        hide() {
            Loading.hide();
        }
    }
};
</script>
