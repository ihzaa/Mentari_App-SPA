import User from "./user";
export const getUser = () => {
    axios.defaults.headers = {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0"
    };
    let token = localStorage.getItem("token");
    if (!_.isEmpty(token)) {
        axios
            .get("api/user", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(result => {
                User.data = result.data;
                window.user = result.data;
                axios.defaults.headers.common["Authorization"] = token;
                // console.log(window.user);
            })
            .catch(() => {
                localStorage.removeItem("token");
            });
    }
};

export const logoutUser = () => {
    axios
        .get("auth/logout")
        .then(result => {
            localStorage.removeItem("token");
            User.data = null;
            window.user = null;
            axios.defaults.headers.common["Authorization"] = null;
        })
        .catch(err => {
            console.log(err);
        });
};
