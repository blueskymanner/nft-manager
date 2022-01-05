import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { mockData } from '../../mockData';
import { sleep } from 'utils';

export const fetchArtists = createAsyncThunk(
  'artist/fetchArtists',
  async () => {
    await sleep(2000);
    return mockData;
  }
);

export const fetchArtistsBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addCase(fetchArtists.pending, (state: any, action: any) => {
    if (state.loading === 'idle') {
      state.loading = 'pending';
      state.currentRequestId = action.meta.requestId;
    }
  });
  builder.addCase(fetchArtists.fulfilled, (state: any, action) => {
    const { requestId } = action.meta;
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle';
      state.entities = action.payload;
      state.currentRequestId = undefined;
    }
  });
  builder.addCase(fetchArtists.rejected, (state: any, action) => {
    const { requestId } = action.meta;
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle';
      state.error = action.error;
      state.currentRequestId = undefined;
    }
  });
};
