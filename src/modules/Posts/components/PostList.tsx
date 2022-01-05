import React, { useEffect } from 'react';
import { Box, Grid, Pagination, Stack } from '@mui/material';
import { useAppDispatch } from 'common/hooks';
import {
  PostItem,
  PostItemSkeleton,
  IPost,
  useSelectPostsData,
  useSelectPostLoading,
  actionsPost
} from 'modules/Posts';

interface PostListProps {
  text?: string;
}

export const PostList: React.FC<PostListProps> = () => {
  const dispatch = useAppDispatch();
  const entities = useSelectPostsData();
  const loading = useSelectPostLoading();

  useEffect(() => {
    dispatch(actionsPost.fetchPosts());
  }, [dispatch]);

  const renderPostList = () => {
    return entities?.map((post: IPost, i: number) => (
      <Grid key={i} xs={12} item>
        <PostItem {...post} />
      </Grid>
    ));
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 4,
          border: '1px solid #BDBDBD',
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Grid container>
          {loading === 'pending' ? (
            <PostItemSkeleton numberShow={5} />
          ) : (
            renderPostList()
          )}
        </Grid>
      </Box>
      <Stack alignItems="center" mt={4}>
        <Pagination count={10} />
      </Stack>
    </>
  );
};
