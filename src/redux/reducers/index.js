import errorReducer from './error';
import movieReducer from './movie';
const { combineReducers } = require('redux');
const rootReducers = combineReducers({
    error: errorReducer,
    movies: movieReducer
});
export default rootReducers;
