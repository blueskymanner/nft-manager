import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { size } from 'lodash';
import { UserItem, IUser, useSelectUsersData } from 'modules/Users';
import { PostItem, IPost, useSelectPostsData } from 'modules/Posts';
import { Layout, PageHeader } from 'components';
import { useRouter } from 'next/router';
import { withAuth } from 'hooks';

const UserDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const usersData = useSelectUsersData();
  const postsData = useSelectPostsData();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (!id || !size(usersData)) return;
    // @ts-ignore
    const newUser = usersData.filter((user: IUser) => user.id === id);
    setUser(newUser[0]);
  }, [id, usersData]);

  const renderPostList = () => {
    return postsData?.map((item: IPost, i: number) => (
      <Grid key={i} item xs={6} md={4}>
        <PostItem {...item} />
      </Grid>
    ));
  };

  return (
    <Layout variant="loggned" title={user?.name}>
      <PageHeader title="All Members" marginBottom={5} />
      <Container>
        <UserItem hasUserDetail={true} {...user} />
        <Box my={5}>
          <Typography variant="h4" color="textPrimary">
            Member Items
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {renderPostList()}
        </Grid>
      </Container>
    </Layout>
  );
};
export default withAuth(UserDetailPage);
