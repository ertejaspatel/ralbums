
import {combineReducers} from 'redux';
import albums from "./albumReducer";
import users from "./userReducer";
import photos from "./photoReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    albums,
    users,
    photos,
    apiCallsInProgress
});

export default rootReducer;