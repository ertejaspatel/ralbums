
import { LOAD_USERS_SUCCESS } from "../actions/actionTypes";

export default function userReducer(state=[], action){
    switch(action.type){
        case LOAD_USERS_SUCCESS:
            return {...action.users};
        default:
            return state;
    }
}