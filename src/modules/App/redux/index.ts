import { createSlice } from '@reduxjs/toolkit';
import reducers, { defaultState } from './reducers';

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: { ...defaultState },
  reducers,
  extraReducers: builder => {}
});

const extraActions = {
  ...actions
};

export * from './select-hooks';
export { extraActions as actionsApp, reducer };
