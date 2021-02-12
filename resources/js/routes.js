const Home = () => import('./components/Home');
const Login = () => import('./components/Login');
const Register = () => import('./components/Register');
const Detail = () => import('./components/Detail');

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
