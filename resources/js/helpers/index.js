import { isEmpty } from "lodash";
export const setHttpToken = token => {
    if (isEmpty(token))
        window.axios.defaults.headers.common["Authorization"] = null;
    else
        window.axios.defaults.headers.common["Authorization"] =
            "Bearer " + token;
    console.log(window.axios.defaults.headers);
};
