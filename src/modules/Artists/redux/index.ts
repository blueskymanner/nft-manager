import { createSlice } from '@reduxjs/toolkit';
import { fetchArtists, fetchArtistsBuilder } from './async-thunk';
import reducers, { defaultState } from './reducers';

const { actions, reducer } = createSlice({
  name: 'artist',
  initialState: { ...defaultState },
  reducers,
  extraReducers: builder => {
    fetchArtistsBuilder(builder);
  }
});

const extraActions = {
  ...actions,
  fetchArtists,
  fetchArtistsBuilder
};

export * from './select-hooks';
export { extraActions as actionsArtist, reducer };
