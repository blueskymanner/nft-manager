import { PayloadAction } from '@reduxjs/toolkit';
import { IFlowState } from '../../types';

export const defaultState: IFlowState = {
  loading: 'idle',
  currentRequestId: undefined,
  error: null
};
const reducers = {};

export default reducers;
