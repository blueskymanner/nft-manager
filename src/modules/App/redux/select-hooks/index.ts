import { getWalletAddress } from 'common/localStorage';
import { RootState } from 'common/redux';
import { useSelector } from 'react-redux';
import { IWindowDimension } from '../../types';

export const useSelectAppLoaded = () =>
  useSelector<RootState, boolean>(state => state.app?.isLoaded);

export const useSelectWindowDimension = () =>
  useSelector<RootState, IWindowDimension>(state => state.app?.window);

export const useSelectWalletConnected = () =>
  useSelector<RootState, boolean>(state => state.app?.walletConnected);
