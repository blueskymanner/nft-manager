import React from 'react';
import { Box, Typography } from '@mui/material';
import { EnhanceAvatar, TextCopy } from 'components';
import { useSelectCurrentUser } from 'modules/Auth';
import { theme, useDashboardStyles } from 'themes';
import { getWalletAddress } from 'common/localStorage';

export const ContentProfile = () => {
  const classes = useDashboardStyles();
  const user = useSelectCurrentUser();
  const walletAddress = getWalletAddress();

  return (
    <Box className={classes.boxProfile}>
      <EnhanceAvatar size="lg" name={user.name} className={classes.avatar} />
      <Typography component="h1" variant="h6" sx={{ fontWeight: 500 }}>
        {user.name ? user.name : 'Account Name'}
      </Typography>
      <Box mt={0.75}>
        <TextCopy
          textColor={theme.palette.text.disabled}
          text={walletAddress ? walletAddress : '000 0 00 000 000 00..'}
        />
      </Box>
    </Box>
  );
};
