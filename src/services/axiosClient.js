import axios from "axios";
const API_URL = process.env.REACT_APP_THEMOVIE_API;
const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.request.use(async (config) => {
    return config;
});
axiosInstance.interceptors.response.use(
    async (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    }
);
export default axiosInstance;