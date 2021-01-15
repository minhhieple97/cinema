import errorReducer from './errorReducer';
import movieReducer from './movieReducer';

const { combineReducers } = require('redux');
const rootReducers = combineReducers({
    error: errorReducer,
    movies: movieReducer
});
export default rootReducers;
