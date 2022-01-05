import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import { mockData } from 'modules/Users/mockData';
import { sleep } from 'utils';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
  // const response = await MemberService.getMembersListMockData();
  sleep(2000);
  return mockData;
});

export const fetchUsersBuilder = (builder: ActionReducerMapBuilder<any>) => {
  builder.addCase(fetchUsers.pending, (state: any, action: any) => {
    if (state.loading === 'idle') {
      state.loading = 'pending';
      state.currentRequestId = action.meta.requestId;
    }
  });
  builder.addCase(fetchUsers.fulfilled, (state: any, action) => {
    const { requestId } = action.meta;
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle';
      state.entities = action.payload;
      state.currentRequestId = undefined;
    }
  });
  builder.addCase(fetchUsers.rejected, (state: any, action) => {
    const { requestId } = action.meta;
    if (state.loading === 'pending' && state.currentRequestId === requestId) {
      state.loading = 'idle';
      state.error = action.error;
      state.currentRequestId = undefined;
    }
  });
};
