import Axios from "axios";
import User from "./user";
// export const getUser = () => {
let token = localStorage.getItem("token");
if (!_.isEmpty(token)) {
    Axios.get("api/user", {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(result => {
            User.data = result.data;
            window.user = result.data;
            axios.defaults.headers.common["Authorization"] = token;
            console.log(window.user);
        })
        .catch(() => {
            localStorage.removeItem("token");
        });
}
// };
