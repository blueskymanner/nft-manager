import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginForm } from 'modules/Auth';
import { APIMapping } from 'common/api';
import { get } from 'lodash';

export const login = createAsyncThunk<any, ILoginForm, ThunkAPIConfig>(
  'auth/login',
  async (args, thunkAPI) => {
    const { authService } = get(thunkAPI, 'extra') as APIMapping;
    const response = await authService.login(args);
    return response;
  }
);

export const loginBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addCase(login.pending, (state: any, { meta }: any) => {
    if (state.loading === 'idle') {
      state.loading = 'pending';
      state.currentRequestId = meta.requestId;
    }
  });
  builder.addCase(login.fulfilled, (state: any, action: any) => {
    const { meta } = action;
    if (
      state.loading === 'pending' &&
      state.currentRequestId === meta.requestId
    ) {
      return {
        ...state,
        loading: 'idle',
        error: null,
        currentRequestId: undefined
      };
    }
  });
  builder.addCase(login.rejected, (state: any, action) => {
    const { meta, error } = action;
    if (
      state.loading === 'pending' &&
      state.currentRequestId === meta.requestId
    ) {
      return {
        ...state,
        loading: 'idle',
        currentRequestId: undefined,
        error: error ? error.message : ''
      };
    }
  });
};
