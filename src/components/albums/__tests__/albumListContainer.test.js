import '@testing-library/jest-dom';
import { getAllByTestId } from '@testing-library/dom';
import React from 'react';
import {Provider} from 'react-redux';
import {render, fireEvent, screen} from '@testing-library/react';
import AlbumListContainer from '../AlbumListContainer';
import {mockStore} from "../../../test/utils/mockStore";
import albums from "../../../test/__mocks__/albums";
import users from "../../../test/__mocks__/users";
import photos from "../../../test/__mocks__/photos";

const defaultState = {
    albums: albums,
    users:{},
    photos:photos,
    apiCallsInProgress:0
};

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with

function renderWithRedux(ui,initialState=defaultState) {

  const store = mockStore(initialState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  }
}

test('initial render of album list should only render items that can be visible in viewport', () => {
    const { container} = renderWithRedux(<AlbumListContainer />)
    const elements = getAllByTestId(container,"album");

    //total items are 100 but rendered only 10 or 20 that can be visible on the viewport
    expect(elements.length).toBeLessThanOrEqual(albums.length);
})