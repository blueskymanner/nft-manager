import { createSlice } from '@reduxjs/toolkit';
import { flowAuthenticate, flowAuthenticateBuilder } from './async-thunk';
import reducers, { defaultState } from './reducers';

const { actions, reducer } = createSlice({
  name: 'flow',
  initialState: { ...defaultState },
  reducers,
  extraReducers: builder => {
    flowAuthenticateBuilder(builder);
  }
});

const extraActions = {
  ...actions,
  flowAuthenticate,
  flowAuthenticateBuilder,
};

export * from './select-hooks';
export { extraActions as actionsFlow, reducer };
