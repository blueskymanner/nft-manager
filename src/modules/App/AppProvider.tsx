import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { Backdrop, CircularProgress, CssBaseline } from '@mui/material';
import { Notications } from 'components';
import { useSelectAppLoaded } from './redux';
import { IAppProps } from './types';
import { getWalletAddress } from 'common/localStorage';
import { isEmpty } from 'lodash';
import { actionsApp } from 'modules/App';
import { useAppDispatch } from 'common/hooks';

export const AppProvider = ({ children }: IAppProps) => {
  const dispatch = useAppDispatch();
  const showLoader = useSelectAppLoaded();

  const updateWindowDimension = useCallback(() => {
    dispatch(
      actionsApp.updateWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      })
    );
  }, []);

  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowDimension);
    updateWindowDimension();
    return () => window.removeEventListener('resize', updateWindowDimension);
  });

  useEffect(() => {
    const getWalletFromStorage = getWalletAddress();
    if (isEmpty(getWalletFromStorage)) {
      return;
    }
    dispatch(actionsApp.handleConnectWallet(true));
  }, []);

  return (
    <>
      <CssBaseline />
      <Notications>{children}</Notications>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};
