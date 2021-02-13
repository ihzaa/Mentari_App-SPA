import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// const Home = () => import("./components/Home");
// const Login = () => import("./components/Login");
// const Register = () => import("./components/Register");
// const Detail = () => import("./components/Detail");
// const Profile = () => import("./components/Profile");
// const PageNotFound = () => import("./components/PageNotFound");
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Detail from "./components/Detail";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";

const routes = [
    // {
    //     path: "*",
    //     component: NotFound
    // },
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
    }
];

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "font-semibold",
    routes: routes
});

router.beforeEach((to, from, next) => {
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
