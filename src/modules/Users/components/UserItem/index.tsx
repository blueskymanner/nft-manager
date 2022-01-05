import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { EnhanceAvatar, EnhanceLink, TextCopy } from 'components';
import { IUser } from 'modules/Users';

interface UserItemProps extends IUser {
  hasUserDetail?: boolean;
}
export const UserItem: React.FC<UserItemProps> = ({
  id,
  name,
  email,
  wallet,
  hasUserDetail = false
}) => {
  return (
    <Box mt={2} border="1px solid #E5E5E5" borderRadius={4} p={2}>
      <Grid container spacing={2} alignItems="center">
        {hasUserDetail && (
          <Grid item xs={6} lg={2}>
            <EnhanceAvatar name={name} />
          </Grid>
        )}
        <Grid item xs={6} lg={3}>
          <Box mb={0.5}>
            <Typography component="p" variant="subtitle2">
              Member
            </Typography>
          </Box>
          <Typography>{name}</Typography>
        </Grid>
        <Grid item xs={6} lg={3}>
          <Box mb={0.5}>
            <Typography component="p" variant="subtitle2">
              Email
            </Typography>
          </Box>
          <Typography>{email}</Typography>
        </Grid>
        <Grid item xs={6} lg={hasUserDetail ? 4 : 3}>
          <Box mb={0.5}>
            <Typography component="p" variant="subtitle2">
              Wallet
            </Typography>
          </Box>
          <TextCopy text={wallet} />
        </Grid>
        {!hasUserDetail && (
          <Grid item xs={6} lg={3}>
            <EnhanceLink
              name="SEE DETAILS"
              url={`/user/${id}`}
              color="secondary"
              variant="button"
              underline="none"
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
