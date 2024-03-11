import axios from "axios";
import { BASE_URL } from "./utils/apiEndpoints";

export const loginCall = async(userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post(BASE_URL + "/api/auth/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};