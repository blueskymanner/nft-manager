import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { size } from 'lodash';
import { useRouter } from 'next/router';
import {
  IPost,
  PostDetailSidebar,
  PostDetailContent,
  useSelectPostsData
} from 'modules/Posts';
import { Layout, PageHeader } from 'components';
import { withAuth } from 'hooks';

const PostDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const postsData = useSelectPostsData();
  const [postData, setpostData] = useState<IPost>();

  useEffect(() => {
    if (!id || !size(postsData)) return;
    let newData = {} as IPost;
    postsData.map((post: IPost) => {
      if (post.id === +id) {
        newData = post;
      }
    });
    setpostData(newData);
  }, [id, postsData]);
  return (
    <Layout variant="loggned" title={postData?.name}>
      <PageHeader title="Raffle Campaign Details " />
      {postData && (
        <Container sx={{ mt: 3, mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={6} lg={4}>
              <PostDetailSidebar {...postData} />
            </Grid>
            <Grid item xs={6} lg={8}>
              <PostDetailContent />
            </Grid>
          </Grid>
        </Container>
      )}
    </Layout>
  );
};
export default withAuth(PostDetailPage);
