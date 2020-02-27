import {getAlbums} from '../albumActions';
import * as types from '../actionTypes';
import {mockStore} from "../../../test/utils/mockStore";
import Agent from "../../../Agent";

describe("Get All Albums", () => {
    it("creates an action to get album list", async () => {

      const store = mockStore();
      await store.dispatch(getAlbums());
      const actions = store.getActions();
      
      expect(actions[0]).toEqual({ type: types.BEGIN_API_CALL });     
      const albums = await Agent.AlbumsApi.getAlbums();
      expect(actions[1]).toEqual({type: "LOAD_ALBUMS_SUCCESS", albums});
    });
});