import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from 'common/services';
import { IRegisterFormInput } from 'modules/Auth';
import { RequestBody } from 'types';

export const register = createAsyncThunk(
  'auth/register',
  async (arg: IRegisterFormInput, { getState, requestId, rejectWithValue }) => {
    const { auth }: any = getState();
    const { loading, currentRequestId } = auth;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }
    try {
      const response = await AppService.post('/login', {
        data: arg
      } as RequestBody);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addCase(register.pending, (state: any, { meta }: any) => {
    if (state.loading === 'idle') {
      state.loading = 'pending';
      state.currentRequestId = meta.requestId;
    }
  });
};
