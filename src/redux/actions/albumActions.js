import { LOAD_ALBUMS_SUCCESS } from "../actions/actionTypes";
import Agent from "../../Agent";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { toast } from 'react-toastify';


export function loadAlbumsSuccess(albums) {
    return { type: LOAD_ALBUMS_SUCCESS, albums };
}

export function getAlbums() {    

    return async function(dispatch) { 
        dispatch(beginApiCall());
        try{
            const albums = await Agent.AlbumsApi.getAlbums(); 
            dispatch(loadAlbumsSuccess(albums));
        }
        catch(error){            
            dispatch(apiCallError(error));
            toast.error("Oops something went wrong processing your request.");            
        }        
    }
}