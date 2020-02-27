import {beginApiCall} from '../apiStatusActions';
import * as types from '../actionTypes';
import {mockStore} from "../../../test/utils/mockStore";
import Agent from "../../../Agent";

describe("Begin Api Call", () => {
    it("creates an action to indicate the Http Request start", async () => {
        const store = mockStore();
        const expectedAction = { type: types.BEGIN_API_CALL };
        const actualAction = store.dispatch(beginApiCall());
        expect(actualAction).toEqual(expectedAction);
    });
});