
import { LOAD_ALBUMS_SUCCESS } from "../actions/actionTypes";

export default function albumReducer(state=[], action) {
    switch(action.type){
        case LOAD_ALBUMS_SUCCESS:
            return [...action.albums];
        default:
            return state;
    }
}