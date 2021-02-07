import Axios from "axios";
import { setHttpToken } from "../../../helpers";
export const register = ({ dispatch }, { payload, context }) => {
    return Axios.post("/api/auth/register", payload)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            context.errors = err.response.data.errors;
        });
};

export const login = ({ dispatch }, { payload, context }) => {
    return Axios.post("/api/auth/login", payload)
        .then(res => {
            dispatch("setToken", res.data.meta.token);
        })
        .catch(err => {
            context.errors = err.response.data.errors;
        });
};

export const setToken = ({ commit }, token) => {
    commit("setToken", token);
    setHttpToken(token);
};
