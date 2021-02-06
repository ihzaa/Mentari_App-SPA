import Vue from "vue";
import VueRouter from "vue-router";
import auth from "../app/auth/router";

const Routes = [...auth];

Vue.use(VueRouter);

const Router = new VueRouter({
    mode: "history",
    routes: Routes
});

export default Router;
