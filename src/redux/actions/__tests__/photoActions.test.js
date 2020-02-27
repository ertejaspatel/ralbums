import {getPhotos} from '../photoActions';
import {beginApiCall} from '../apiStatusActions';
import * as types from '../actionTypes';
import {mockStore} from "../../../test/utils/mockStore";
import Agent from "../../../Agent";

describe("Get All Photos", () => {    

    it('should create an action to inform that a request to fetch photos is in progress', async() => {
      const store = mockStore();
      await store.dispatch(getPhotos());
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_API_CALL);
    });

    it("should create an action on successfull load of photos", async () => { 
      const store = mockStore();     
      await store.dispatch(getPhotos());
      const actions = store.getActions();
      const photos = await Agent.AlbumsApi.getPhotos();
      expect(actions[1]).toEqual({type: types.LOAD_PHOTOS_SUCCESS,  photos});
    });
});