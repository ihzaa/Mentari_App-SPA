import Axios from "axios";
import { isEmpty } from "lodash";
import { setHttpToken } from "../../../helpers";
export const register = ({ dispatch }, { payload, context }) => {
    return Axios.post("/api/auth/register", payload)
        .then(res => {
            dispatch("setToken", res.data.meta.token).then(() => {
                dispatch("fetchUser", res.data.data);
            });
        })
        .catch(err => {
            context.errors = err.response.data.errors;
        });
};

export const login = ({ dispatch }, { payload, context }) => {
    return Axios.post("/api/auth/login", payload)
        .then(res => {
            dispatch("setToken", res.data.meta.token).then(() => {
                dispatch("fetchUser", res.data.data);
            });
        })
        .catch(err => {
            context.errors = err.response.data.errors;
        });
};

export const setToken = ({ commit, dispatch }, token) => {
    if (isEmpty(token)) {
        return dispatch("checkTokenExists").then(result => {
            setHttpToken(token);
        });
    }
    commit("setToken", token);
    setHttpToken(token);
};

export const removeToken = ({ commit }) => {
    commit("setAuthenticated", false);
    commit("setUserData", null);
    commit("setToken", null);
    setHttpToken(null);
};

export const fetchUser = ({ commit }) => {
    Axios.get("/api/user").then(result => {
        commit("setAuthenticated", true);
        commit("setUserData", result.data);
    });
};

export const checkTokenExists = () => {
    let token = localStorage.getItem("access_token");
    if (isEmpty(token)) {
        return Promise.reject("NO_TOKEN");
    }
    return Promise.resolve(token);
};
