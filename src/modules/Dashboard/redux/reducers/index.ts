import { PayloadAction } from '@reduxjs/toolkit';
import { IDashboardState } from '../../types';
import { tabData } from '../../mockData';

export const defaultState: IDashboardState = {
  tabActive: tabData[0].slug
};

const reducers = {
  handleUpdateTabActive: (
    state: IDashboardState,
    action: PayloadAction<string>
  ) => {
    state.tabActive = action.payload;
  }
};

export default reducers;
