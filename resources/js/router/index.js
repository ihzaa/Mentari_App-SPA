import Vue from "vue";
import VueRouter from "vue-router";
import auth from "../app/auth/router";
import home from "../app/home/router"

const Routes = [...auth,...home];

Vue.use(VueRouter);

const Router = new VueRouter({
    mode: "history",
    routes: Routes
});

export default Router;
