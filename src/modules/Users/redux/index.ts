import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUsersBuilder } from './async-thunk';
import reducers, { defaultState } from './reducers';

const { actions, reducer } = createSlice({
  name: 'user',
  initialState: { ...defaultState },
  reducers,
  extraReducers: builder => {
    fetchUsersBuilder(builder);
  }
});

const extraActions = {
  ...actions,
  fetchUsers,
  fetchUsersBuilder
};

export * from './select-hooks';
export { extraActions as actionsUser, reducer };
