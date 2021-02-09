import Axios from "axios";
import User from "./user";
export const getUser = () => {
    let token = localStorage.getItem("token");
    if (!_.isEmpty(token)) {
        Axios.get("api/user", {
            headers: { Authorization: `Bearer ${token}` }
        }).then(result => {
            axios.defaults.headers.common["Authorization"] = token;
            User.data = result.data;
        });
    }
};
