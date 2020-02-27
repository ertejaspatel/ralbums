
import { LOAD_PHOTOS_SUCCESS } from "../actions/actionTypes";

export default function albumReducer(state=[], action) {
    switch(action.type){
        case LOAD_PHOTOS_SUCCESS:
            return [...action.photos];
        default:
            return state;
    }
}