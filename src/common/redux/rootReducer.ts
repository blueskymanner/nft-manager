import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

// Reducers
import { reducer as app } from 'modules/App';
import { reducer as auth } from 'modules/Auth';
import { reducer as flow } from 'modules/Flow';
import { reducer as user } from 'modules/Users';
import { reducer as post } from 'modules/Posts';
import { reducer as dashboard } from 'modules/Dashboard';
import { reducer as artist } from 'modules/Artists';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'],
  transforms: [createBlacklistFilter('auth', ['loading', 'error'])],
  stateReconciler: autoMergeLevel2
};

export const reducerMappingList = {
  app,
  auth,
  flow,
  user,
  post,
  dashboard,
  artist
};

const rootReducer = combineReducers(reducerMappingList);
export type RootState = ReturnType<typeof rootReducer>;

export const persistedReducer = persistReducer<RootState>(
  persistConfig,
  rootReducer
);
export default rootReducer;
