import axiosInstance from "./axiosClient";
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = process.env.REACT_APP_THEMOVIE_API_KEY;
export const getDataMovie = async (type, page) => {
    const data = await axiosInstance.get(`/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`);
    return data;
};