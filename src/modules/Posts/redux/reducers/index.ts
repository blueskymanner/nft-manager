import { IPostState } from '../../types';

export const defaultState: IPostState = {
  entities: [],
  loading: 'idle',
  currentRequestId: undefined,
  error: null
};

const reducers = {};

export default reducers;
