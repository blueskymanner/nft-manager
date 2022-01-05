// import { PayloadAction } from '@reduxjs/toolkit';
import { IArtistState } from '../../types';

export const defaultState: IArtistState = {
  entities: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null
};

const reducers = {};

export default reducers;
