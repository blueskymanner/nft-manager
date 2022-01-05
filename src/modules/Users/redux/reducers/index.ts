// import { PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from '../../types';

export const defaultState: IUserState = {
  entities: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null
};

const reducers = {};

export default reducers;
