import { isEmpty } from "lodash";
export const setHttpToken = token => {
    if (isEmpty(token))
        window.axios.default.headers.common["Authorization"] = null;
    else
        window.axios.default.headers.common["Authorization"] =
            "Bearer " + token;
};
