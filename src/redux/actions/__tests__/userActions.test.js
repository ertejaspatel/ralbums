import {getUsers} from '../userActions';
import {beginApiCall, API_CALL_ERROR} from '../apiStatusActions';
import * as types from '../actionTypes';
import {mockStore} from "../../../test/utils/mockStore";
import Agent from "../../../Agent";



describe("Get All Users", () => {    

    it('should create an action to inform that a request to fetch users is in progress', async() => {
      const store = mockStore();
      await store.dispatch(getUsers());
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_API_CALL);
    });

    it("should create an action on successfull load of users", async () => { 
      const store = mockStore();     
      await store.dispatch(getUsers());
      const actions = store.getActions();
      const users = await Agent.UsersApi.getUsers();
      const usersMap = {}
      users.forEach(u=>{
        usersMap[u.id] = u;
      });
      expect(actions[1]).toEqual({type: types.LOAD_USERS_SUCCESS, users: usersMap});
    });
});