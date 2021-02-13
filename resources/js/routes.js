import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import('./components/Home');
const Login = () => import('./components/Login');
const Register = () => import('./components/Register');
const Detail = () => import('./components/Detail');

const routes = [
        // {
        //     path: "*",
        //     component: NotFound
        // },
        {
            path: "/register",
            component: Register,
            name: "register"
        },
        {
            path: "/",
            component: Home,
            name: "home"
        },
        {
            path: "/login",
            component: Login,
            name: "login"
        },
        {
            path: "/detail",
            component: Detail,
            name: "detail"
        }
    ]

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "font-semibold",
    routes:routes
})

export default router