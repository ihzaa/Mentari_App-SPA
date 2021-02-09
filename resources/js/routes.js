import Register from "./components/Register";
import Navigation from "./components/Navigation";

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
            component: Register
        },
        {
            path: "/",
            component: Navigation
        }
    ]
};
