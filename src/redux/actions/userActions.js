import { LOAD_USERS_SUCCESS } from "../actions/actionTypes";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import Agent from "../../Agent";
import { toast } from 'react-toastify';

export function loadUsersSuccess(users) {
    return { type: LOAD_USERS_SUCCESS, users };
}

export function getUsers() {
    return async function(dispatch){
        dispatch(beginApiCall());
        try{
            const users = await Agent.UsersApi.getUsers();  
            const usersMap = {}
            users.forEach(u=>{
                usersMap[u.id] = u;            
            })      
            dispatch(loadUsersSuccess(usersMap));            
        }
        catch(error){
            dispatch(apiCallError(error));
            toast.error("Oops something went wrong processing your request.");            
            throw error;
        } 
    }
}