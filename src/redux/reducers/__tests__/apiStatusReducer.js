import apiStatusReducer from '../apiStatusReducer';
import * as types from "../../actions/actionTypes";

describe('Album reducer', () => {

    const initialState = 0;

    it('should return the initial state', () => {
        expect(
            apiStatusReducer(undefined,{})
        ).toEqual(initialState);
    });

    it('should increase apiCallsInProgress when api call is made', () => {
        expect(
            apiStatusReducer(undefined, { type: types.BEGIN_API_CALL })
        ).toEqual(1);
        expect(
            apiStatusReducer(1, { type: types.BEGIN_API_CALL })
        ).toEqual(2);
    });

    it('should decrease apiCallsInProgress when api call is SUCCESS or FAILURE', () => {
        expect(
            apiStatusReducer(2, { type: types.API_CALL_ERROR })
        ).toEqual(1);
        expect(
            apiStatusReducer(1, { type: types.LOAD_ALBUMS_SUCCESS })
        ).toEqual(0);
    });
});