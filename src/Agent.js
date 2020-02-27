import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'https://jsonplaceholder.typicode.com'; 
// const API_ROOT = 'http://localhost:4000'; 



const handleErrors = err => {    
    return err;
};

const responseBody = res => res.body;

const tokenPlugin = req => {
    
};



const requests = {
    delete: url =>
        superagent
            .del(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT}${url}`, body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`)
            .send(body)
            .use(tokenPlugin)
            .end(handleErrors)
            .then(responseBody)    
};

const AlbumsApi = {    
    getAlbums:() =>    
        requests.get(`/albums`),
    getPhotos:(albumId)=>
        requests.get(`/albums/${albumId}/photos`),
};

const UsersApi = {    
    getUsers: () =>
        requests.get("/users"),    
}

export default {    
    API_ROOT,
    AlbumsApi,
    UsersApi
};
