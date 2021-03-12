import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("./components/Home");
const Login = () => import("./components/Login");
const Register = () => import("./components/Register");
const Detail = () => import("./components/Detail");
const Profile = () => import("./components/Profile");
const PageNotFound = () => import("./components/PageNotFound");
const Cart = () => import("./components/Cart");
const Riwayat = () => import("./components/Riwayat");
const ForgotPassword = () => import("./components/ForgotPassword");
const Promo = () => import("./components/Promo");
// const ResetPasswordForm = () => import("./components/ResetPasswordForm");
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Detail from "./components/Detail";
// import Profile from "./components/Profile";
// import PageNotFound from "./components/PageNotFound";

const routes = [
    {
        path: "/register",
        component: Register,
        name: "register",
        meta: {
            notAuthenticated: true
        }
    },
    {
        path: "/",
        component: Home,
        name: "home"
    },
    {
        path: "/login",
        component: Login,
        name: "login",
        meta: {
            notAuthenticated: true
        }
    },
    {
        path: "/detail",
        component: Detail,
        name: "detail"
    },
    {
        path: "/profile",
        component: Profile,
        name: "profile",
        meta: {
            auth: true
        }
    },
    {
        path: "*",
        name: "notfound",
        component: PageNotFound
    },
    {
        path: "/cart",
        component: Cart,
        name: "cart",
        meta: {
            auth: true
        }
    },
    {
        path: "/riwayat",
        component: Riwayat,
        name: "riwayat",
        meta: {
            auth: true
        }
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: ForgotPassword,
        meta: {
            notAuthenticated: true
        }
    },
    {
        path: "/promo",
        name: "promo",
        component: Promo,
        meta: {
            notAuthenticated: true
        }
    },
    // {
    //     path: "/reset-password/:token",
    //     name: "reset-password-form",
    //     component: ResetPasswordForm,
    //     meta: {
    //         auth: false
    //     }
    // }
];

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "font-semibold",
    routes: routes
});

router.beforeEach((to, from, next) => {
    //scroll ke atas
    window.scrollTo(0, 0);
    // mengecek ada tidak meta auth di dalam meta
    if (to.matched.some(record => record.meta.auth)) {
        // cek di localstorage auth, jika false maka diarahkan ke halaman login
        let token = localStorage.getItem("token");
        // console.log(token);
        if (token === null) {
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.notAuthenticated)) {
        let token = localStorage.getItem("token");
        if (token === null) {
            next();
        } else {
            next("/");
        }
    } else {
        next();
    }
});

export default router;
