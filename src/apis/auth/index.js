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
        const response = await axiosConfig.post("/signin", {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error.response.data;
    }
}

export const refreshAccessToken = async () => {
    try {
        const response = await axiosConfig.get("/refresh-token", {
            withCredentials: true
        });

        const accessToken = response.data?.data?.accessToken;
        console.log(accessToken)
        localStorage.setItem('access_token', accessToken);

        return accessToken;
    } catch (error) {
        console.error("Failed to refresh token", error);
        return null;
    }
}