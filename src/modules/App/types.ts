import { ReactNode } from 'react';

export interface IAppProps {
  children: ReactNode;
}

export interface IAppState {
  isLoaded: boolean;
  walletConnected: boolean;
  window: IWindowDimension;
}

export interface IWindowDimension {
  width: number;
  height: number;
}
