import React, { useState } from 'react';
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { actionsAuth, useSelectCurrentUser } from 'modules/Auth';
import { redirect } from 'utils';
import { useAppDispatch } from 'common/hooks';
import {
  removeToken,
  removeUserId,
  removeWalletAddress
} from 'common/localStorage';
import { EnhanceAvatar } from 'components';

export interface HeaderProfileProp {}

export const HeaderProfile: React.FC<HeaderProfileProp> = () => {
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'profile-menu' : undefined;
  const user = useSelectCurrentUser();

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    dispatch(actionsAuth.logout());
    if (!user) {
      removeWalletAddress();
      removeToken();
      removeUserId();
    }
  };
  return (
    <>
      <EnhanceAvatar name={user.name} size="sm" sx={{ marginRight: '8px' }} />
      <IconButton
        aria-describedby={id}
        size="small"
        color="inherit"
        onClick={handleClick}
      >
        <Badge color="secondary">
          <ExpandMoreIcon fontSize="small" color="disabled" />
        </Badge>
      </IconButton>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <MenuItem
          onClick={() => redirect('/user/setting')}
          sx={{ fontSize: '14px' }}
        >
          Profile Settings
        </MenuItem>
        <MenuItem onClick={handleLogout} sx={{ fontSize: '14px' }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
