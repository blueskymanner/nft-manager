import React from 'react';
import { Box, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { usePostStyles } from 'themes';

interface PostItemSkeletonProps {
  numberShow?: number;
}
export const PostItemSkeleton = ({ numberShow = 1 }: PostItemSkeletonProps) => {
  const classes = usePostStyles();
  return (
    <>
      {[...Array(numberShow)].map((item, i) => (
        <Grid key={i} xs={12} item>
          <Box className={classes.link}>
            <Grid key={i} container spacing={2} alignItems="center">
              <Grid item xs={6} lg={3}>
                <Skeleton animation="wave" variant="rectangular" height={62} />
              </Grid>
              <Grid item xs={6} lg={3}>
                <Skeleton animation="wave" variant="rectangular" height={62} />
              </Grid>
              <Grid item xs={6} lg={3}>
                <Skeleton animation="wave" variant="rectangular" height={62} />
              </Grid>
              <Grid item xs={6} lg={3}>
                <Skeleton animation="wave" variant="rectangular" height={62} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      ))}
    </>
  );
};
