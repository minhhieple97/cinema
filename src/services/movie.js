import axiosInstance from './axiosClient';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';
const API_KEY = process.env.REACT_APP_THEMOVIE_API_KEY;
export const getDataMovie = async (type, page) => {
  const data = await axiosInstance.get(
    `/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return data;
};
export const searchDataMovie = async (query) => {
  const data = await axiosInstance.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return data;
};
export const getMovieReviewUrl = async (id, page = 1) => {
  const data = await axiosInstance.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return data;
};

export const getMovieVideoUrl = async (id) => {
  const data = await axiosInstance.get(
    `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieImagesUrl = async (id) => {
  const data = await axiosInstance.get(
    `/movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
  );
  return data;
};

export const getMovieCreditsUrl = async (id) => {
  const data = await axiosInstance.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieDetailsUrl = async (id) => {
  const data = await axiosInstance.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};
