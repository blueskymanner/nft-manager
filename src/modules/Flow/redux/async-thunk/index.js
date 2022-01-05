import { createAsyncThunk } from '@reduxjs/toolkit';
import * as fcl from '@onflow/fcl';

export const flowAuthenticate = createAsyncThunk(
  'flow/authenticate',
  async (args, thunkAPI) => {
    const response = await fcl.authenticate();
    return response;
  }
);

export const flowAuthenticateBuilder = builder => {
  builder.addCase(flowAuthenticate.pending, (state, { meta }) => {
    const { requestId } = meta;
    if (state.loading === 'idle') {
      state.loading = 'pending';
      state.currentRequestId = requestId;
    }
  });
  builder.addCase(flowAuthenticate.fulfilled, (state, { meta }) => {
    if (
      state.loading === 'pending' &&
      state.currentRequestId === meta.requestId
    ) {
      return {
        ...state,
        loading: 'idle',
        currentRequestId: undefined
      };
    }
  });
  builder.addCase(flowAuthenticate.rejected, (state, { meta }) => {
    if (
      state.loading === 'pending' &&
      state.currentRequestId === meta.requestId
    ) {
      return {
        ...state,
        loading: 'idle',
        currentRequestId: undefined,
        error: error
      };
    }
  });
};
