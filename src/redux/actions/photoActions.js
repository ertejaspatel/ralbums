import { LOAD_PHOTOS_SUCCESS } from "./actionTypes";
import Agent from "../../Agent";
import { beginApiCall, apiCallError } from "./apiStatusActions";
import { toast } from 'react-toastify';

export function loadPhotosSuccess(photos) {
    return { type: LOAD_PHOTOS_SUCCESS, photos };
}

export function getPhotos(albumId) {    

    return async function(dispatch) { 
        dispatch(beginApiCall());
        try{
            const photos = await Agent.AlbumsApi.getPhotos(albumId); 
            dispatch(loadPhotosSuccess(photos));
        }
        catch(error){
            dispatch(apiCallError(error));
            toast.error("Oops something went wrong processing your request.");            
            throw error;
        }        
    }
}