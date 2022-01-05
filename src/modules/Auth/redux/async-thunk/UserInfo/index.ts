import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppService } from 'common/services';
import { getToken } from 'common/localStorage';

interface IUserInfoInput {
  userId: string;
}
export const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (arg: IUserInfoInput, { getState, requestId, rejectWithValue }) => {
    const { auth }: any = getState();
    const { loading, currentRequestId } = auth;
    const token = getToken();

    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }
    try {
      const response = await AppService.get(`/userProfile/${arg.userId}`, {
        headers: {
          Authorization: token
        }
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
