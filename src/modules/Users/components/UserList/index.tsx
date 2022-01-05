import React, { useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Box, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import {
  actionsUser,
  IUser,
  UserItem,
  UserSkeleton,
  useSelectUsersData,
  useSelectUsersLoading
} from 'modules/Users';
import { useAppDispatch } from 'common/hooks';

export const UserList = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const postsData = useSelectUsersData();
  const loading = useSelectUsersLoading();

  useEffect(() => {
    dispatch(actionsUser.fetchUsers());
  }, [dispatch]);

  const renderMemberList = () => {
    return postsData?.map((item: IUser, i: number) => (
      <UserItem key={i} {...item} />
    ));
  };

  return (
    <>
      <Box
        mt={6}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Box mr={0.75}>
            <Typography variant="h4" color="textPrimary">
              All Members
            </Typography>
          </Box>
          <IconButton
            size="small"
            color="inherit"
            onClick={() => router.push('/post/create')}
          >
            <ArrowUpwardIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      {loading === 'pending' ? (
        <UserSkeleton numberShow={4} />
      ) : (
        renderMemberList()
      )}
    </>
  );
};
