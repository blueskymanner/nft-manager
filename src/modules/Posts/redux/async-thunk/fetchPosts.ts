import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { mockData } from '../../mockData';
import { sleep } from 'utils';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  await sleep(2000);
  return mockData;
});

export const fetchPostsBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addCase(fetchPosts.pending, (state: any, action: any) => {
    if (state.loading === 'idle') {
      state.loading = 'pending';
      state.currentRequestId = action.meta.requestId;
    }
  });
  builder.addCase(fetchPosts.fulfilled, (state: any, action: any) => {
    const { requestId } = action.meta;
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle';
      state.entities = action.payload;
      state.currentRequestId = undefined;
    }
  });
  builder.addCase(fetchPosts.rejected, (state: any, action: any) => {
    const { requestId } = action.meta;
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle';
      state.error = action.error;
      state.currentRequestId = undefined;
    }
  });
};
