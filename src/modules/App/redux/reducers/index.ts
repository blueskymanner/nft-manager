import { PayloadAction } from '@reduxjs/toolkit';
import { set } from 'lodash';
import { IAppState, IWindowDimension } from '../../types';

export const defaultState: IAppState = {
  isLoaded: false,
  walletConnected: false,
  window: { width: 0, height: 0 }
};

const reducers = {
  updateWindowDimension: (state, action: PayloadAction<IWindowDimension>) => {
    const { payload: window } = action;
    set(state, 'window', window);
  },
  handleShowLoading: (state: IAppState, action: PayloadAction<boolean>) => {
    state.isLoaded = action.payload;
  },
  handleConnectWallet: (state: IAppState, action: PayloadAction<boolean>) => {
    state.walletConnected = action.payload;
  }
};

export default reducers;
