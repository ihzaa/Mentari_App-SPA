import Vue from "vue";
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)


export const Home = Vue.component("home", require("./Home.vue").default);
