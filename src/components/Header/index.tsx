import React, { useMemo, useState } from 'react';
import {
  AppBar,
  Badge,
  Box,
  Chip,
  Container,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography
} from '@mui/material';

import NotificationsIcon from '@mui/icons-material/Notifications';
import { HeaderProfile } from './HeaderProfile';
import { ButtonConnectWallet, EnhanceLink, Navbar } from 'components';
import { getWalletAddress } from 'common/localStorage';
import { formatWalletAddress } from 'utils';
import { useSelectCurrentUser } from 'modules/Auth';
import { isEmpty } from 'lodash';
import {
  useSelectWalletConnected,
  useSelectWindowDimension
} from 'modules/App';
import MenuIcon from '@mui/icons-material/Menu';

const data = [
  { name: 'Raffles', url: '/raffles' },
  { name: 'FAQ', url: '/faq' },
  { name: 'Create', url: '/create' }
];

export interface HeaderProp {
  variant?: 'default' | 'auth' | 'loggned';
}

export const Header: React.FC<HeaderProp> = ({ variant }) => {
  const { width } = useSelectWindowDimension();
  const walletAddress = getWalletAddress();
  const user = useSelectCurrentUser();
  const walletConnected = useSelectWalletConnected();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  useMemo(() => {
    width > 900 && setOpenMenu(false);
  }, [width]);

  return (
    <AppBar
      position={variant === 'loggned' ? 'static' : 'fixed'}
      color="inherit"
      sx={{ boxShadow: ' 0px 1px 0px #E2E2E2' }}
    >
      <Container>
        <Toolbar
          disableGutters={true}
          sx={{
            height: '68px'
          }}
        >
          {/* -------- MENU SP -------- */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenMenu(!openMenu)}
              color="inherit"
              sx={{ ml: -1 }}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={openMenu}
              swipeAreaWidth={0}
              onClose={() => setOpenMenu(false)}
              onOpen={() => setOpenMenu(true)}
            >
              <Box width={240}>
                <Navbar data={data} />
              </Box>
            </SwipeableDrawer>
          </Box>

          {/* -------- TEXT LOGO -------- */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
              fontStyle: 'italic',
              ml: { xs: 1, md: 0 }
            }}
          >
            <EnhanceLink url="/">Velvet</EnhanceLink>
          </Typography>

          {/* -------- MENU PC -------- */}
          {variant === 'default' && (
            <>
              <Box
                sx={{
                  display: { xs: 'none', md: 'block' },
                  ml: { md: 4, lg: 10, xl: 12 }
                }}
              >
                <Navbar data={data} />
              </Box>
              <Box ml="auto" flexShrink={1}>
                {!walletConnected ? (
                  <ButtonConnectWallet showOnHeader={true} />
                ) : (
                  <Chip
                    color="primary"
                    label={
                      <Typography color="white" variant="body2">
                        {formatWalletAddress(walletAddress)}
                      </Typography>
                    }
                  />
                )}
              </Box>
            </>
          )}

          {/* -------- BUTTON CONNECT WALLET -------- */}
          {variant === 'loggned' && (
            <Box display="flex" alignItems="center" ml="auto">
              <IconButton size="small" sx={{ marginRight: '16px' }}>
                <Badge color="secondary">
                  <NotificationsIcon fontSize="small" color="disabled" />
                </Badge>
              </IconButton>
              <HeaderProfile />
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
