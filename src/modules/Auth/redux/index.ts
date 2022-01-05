import { createSlice } from '@reduxjs/toolkit';
import { login, loginBuilder, register, registerBuilder } from './async-thunk';
import reducers, { defaultState } from './reducers';

const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: { ...defaultState },
  reducers,
  extraReducers: builder => {
    loginBuilder(builder);
    registerBuilder(builder);
  }
});

const extraActions = {
  ...actions,
  login,
  register
};

export * from './select-hooks';
export { extraActions as actionsAuth, reducer };
