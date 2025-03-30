import axios from "axios";
import axiosConfig from "../../config/axiosConfig";

export const signupRequest = async ({ email, password, name }) => {
    try {
        const response = await axiosConfig.post("/signup", {
            email,
            password,
            name
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response.data;
    }
}

export const signinRequest = async ({ email, password }) => {
    try {
        const response = await axiosConfig.get("/signin", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response.data;
    }
}