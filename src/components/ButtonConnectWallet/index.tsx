import React from 'react';
import { useAppDispatch } from 'common/hooks';
import { setWalletAddress } from 'common/localStorage';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { theme, useDashboardStyles } from 'themes';
import { actionsFlow } from 'modules/Flow';
import { Button } from '@mui/material';
import { actionsApp, useSelectWalletConnected } from 'modules/App';

export interface ButtonConnectWalletProps {
  showOnHeader?: boolean;
}

export const ButtonConnectWallet: React.FC<ButtonConnectWalletProps> = ({
  showOnHeader = false
}) => {
  const classes = useDashboardStyles();
  const dispatch = useAppDispatch();
  const walletConnected = useSelectWalletConnected();

  const handleConnectWallet = (event: any) => {
    event.preventDefault();
    if (walletConnected) return;

    dispatch(actionsFlow.flowAuthenticate())
      .unwrap()
      .then((res: any) => {
        if (res.addr) {
          setWalletAddress(res.addr);
          dispatch(actionsApp.handleConnectWallet(true));
        }
      });
  };

  return (
    <>
      {showOnHeader ? (
        <Button
          variant="outlined"
          startIcon={<AccountBalanceWalletIcon />}
          onClick={handleConnectWallet}
          disableFocusRipple
          sx={{
            paddingLeft: { xs: '24px', md: '32px' },
            paddingRight: { xs: '24px', md: '32px' },
            borderRadius: '30px'
          }}
        >
          {walletConnected ? 'WALLET CONNECTED' : 'CONNECT WALLET'}
        </Button>
      ) : (
        <Button
          variant="outlined"
          endIcon={<AccountBalanceWalletIcon />}
          onClick={handleConnectWallet}
          disableFocusRipple
          sx={{
            paddingLeft: '32px',
            paddingRight: '32px',
            borderRadius: '30px',
            backgroundColor: theme.palette.grey[100],
            borderColor: theme.palette.grey[100]
          }}
        >
          {walletConnected ? 'WALLET CONNECTED' : 'CONNECT WALLET'}
        </Button>
      )}
    </>
  );
};
