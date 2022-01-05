import { IAuthState } from '../../types';

export const defaultState: IAuthState = {
  accessToken: {
    token: '',
    time: ''
  },
  currentUser: {},
  loading: 'idle',
  currentRequestId: undefined,
  error: null
};

const reducers = {
  logout: (state: IAuthState) => {
    return {
      ...state,
      accessToken: {
        token: '',
        time: ''
      },
      currentUser: {}
    };
  }
};

export default reducers;
