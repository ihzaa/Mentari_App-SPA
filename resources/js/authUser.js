import Axios from "axios";

export const getUser = () => {
    let token = localStorage.getItem("token");
    if (!_.isEmpty(token)) {
        Axios.get("api/user", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(result => {
                console.log(result.data);
            })
            .catch(err => {});
    }
};
