// import Router from "./router";
// import store from "./store";
// import { Carousel } from "bootstrap";
// import '@fortawesome/fontawesome-free/js/all.js'

// // import "swiper/css/swiper.css";
// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

// require("./bootstrap");
// window.Vue = require("vue");

// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */

// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component("app", require("./components/App.vue").default);

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     el: "#app",
//     router: Router,
//     store
// });
require("./bootstrap");
// getUser();

window.Vue = require("vue");

import router from "./routes";
import { NavbarPlugin,CarouselPlugin,CardPlugin,FormInputPlugin,LayoutPlugin, ButtonPlugin,ButtonGroupPlugin,InputGroupPlugin } from "bootstrap-vue";
import VueLazyload from "vue-lazyload";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart,faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import infiniteScroll from "vue-infinite-scroll";

library.add(faShoppingCart,faSearch)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(infiniteScroll);
Vue.use(NavbarPlugin);
Vue.use(CarouselPlugin);
Vue.use(CardPlugin);
Vue.use(LayoutPlugin);
Vue.use(FormInputPlugin);
Vue.use(InputGroupPlugin);
Vue.use(ButtonGroupPlugin);
Vue.use(ButtonPlugin);
Vue.use(VueLazyload);

// export default new VueRouter({
//     routes:routes
// })

const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");