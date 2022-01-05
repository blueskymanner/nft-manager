import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

interface IUserSkeletonProps {
  numberShow?: number;
}
export const UserSkeleton = ({ numberShow = 1 }: IUserSkeletonProps) => {
  return (
    <>
      {[...Array(numberShow)].map((item, i) => (
        <Box key={i} mt={2} border="1px solid #E5E5E5" borderRadius={4} p={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6} lg={3}>
              <Box mb={0.5}>
                <Typography component="p" variant="subtitle2">
                  <Skeleton />
                </Typography>
              </Box>
              <Typography>
                <Skeleton />
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Box mb={0.5}>
                <Typography component="p" variant="subtitle2">
                  <Skeleton />
                </Typography>
              </Box>
              <Typography>
                <Skeleton />
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Box mb={0.5}>
                <Typography component="p" variant="subtitle2">
                  <Skeleton />
                </Typography>
              </Box>
              <Typography>
                <Skeleton />
              </Typography>
            </Grid>
            <Grid item xs={6} lg={3}>
              <Skeleton />
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};
