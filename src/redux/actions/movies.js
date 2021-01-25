import { getDataMovie, searchDataMovie } from '../../services/movie';
import { MOVIE_LIST, SET_ERROR, RESPONSE_PAGE, LOAD_MORE_RESULTS, MOVIE_TYPE, CHANGE_LOADING, SEARCH_QUERY } from '../type';

export const getMovies = (type = 'now_playing', pageNumber = 1) => async (dispatch) => {
    try {
        dispatchMethod(CHANGE_LOADING, true, dispatch)
        const response = await getMoviesRequest(type, pageNumber);
        const { results, payload } = response;
        dispatchMethod(MOVIE_LIST, results, dispatch);
        dispatchMethod(RESPONSE_PAGE, payload, dispatch);
        dispatchMethod(CHANGE_LOADING, false, dispatch)
    } catch (error) {
        if (error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
        }
    }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
    try {
        const response = await getMoviesRequest(type, pageNumber);
        const { results, payload } = response;
        dispatchMethod(LOAD_MORE_RESULTS, { list: results, page: payload.page, totalPages: payload.totalPages }, dispatch);
    } catch (error) {
        if (error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
        }
    }
};

export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
    const payload = { page, totalPages };
    dispatchMethod(RESPONSE_PAGE, payload, dispatch);
};

export const setLoading = (status) => async (dispatch) => {
    dispatchMethod(CHANGE_LOADING, status, dispatch)
};


export const searchMovieQuery = (query) => async (dispatch) => {
    try {
        if (query) {
            const movies = await searchDataMovie(query);
            const { results } = movies;
            dispatchMethod(CHANGE_LOADING, false, dispatch)
            dispatchMethod(SEARCH_QUERY, { results, query }, dispatch);
        }
        else {
            dispatchMethod(SEARCH_QUERY, [], dispatch);
        }
    } catch (error) {
        dispatchMethod(CHANGE_LOADING, false, dispatch)
        console.log({ error })
        if (error.response) {
            dispatchMethod(SET_ERROR, error.response.data.message, dispatch);
        }
    }

};

export const setMovieType = (type) => async (dispatch) => {
    dispatchMethod(MOVIE_TYPE, type, dispatch);
};

const dispatchMethod = (type, payload, dispatch) => {
    dispatch({ type, payload });
};

const getMoviesRequest = async (type, pageNumber) => {
    const data = await getDataMovie(type, pageNumber);
    const { results, page, total_pages } = data;
    const payload = {
        page,
        totalPages: total_pages
    };
    return { results, payload };
};