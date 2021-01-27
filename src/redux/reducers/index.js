import errorReducer from './error';
import movieReducer from './movie';
import routeReducer from './route';
const { combineReducers } = require('redux');
const rootReducers = combineReducers({
    errors: errorReducer,
    movies: movieReducer,
    routes: routeReducer
});
export default rootReducers;
