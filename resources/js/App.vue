<template>
    <div>
        <router-view></router-view>
        <Footer />
    </div>
</template>
<script>
import Footer from "./components/Footer";
import user from "./user";
export default {
    components: { Footer },
    data() {
        return {
            user: user
        };
    }
};
</script>
