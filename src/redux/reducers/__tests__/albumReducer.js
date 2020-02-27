import albumReducer from '../albumReducer';
import * as types from "../../actions/actionTypes";

describe('Album reducer', () => {

    const initialState = [];

    it('should return the initial state', () => {
        expect(
            albumReducer(undefined, { type: types.LOAD_ALBUMS_SUCCESS, albums:[] })
        ).toEqual(initialState);
    });

    it('should handle LOAD_ALBUMS_SUCCESS', () => {
        const albums = [{
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "sunt qui excepturi placeat culpa"
          }];
        expect(
            albumReducer(undefined, { type: types.LOAD_ALBUMS_SUCCESS, albums })
        ).toEqual(
            [ ...initialState, ...albums ]
        );
    });
});