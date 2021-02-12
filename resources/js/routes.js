import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import Detail from "./components/Detail";

export default {
    mode: "history",
    linkActiveClass: "font-semibold",
    routes: [
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
};
