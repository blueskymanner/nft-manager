import React from 'react';
import { Box, Card, CardContent, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { usePostStyles } from 'themes';

interface PostItemCardSkeletonProps {
  numberShow?: number;
}
export const PostItemCardSkeleton = ({
  numberShow = 1
}: PostItemCardSkeletonProps) => {
  const classes = usePostStyles();
  return (
    <Grid container spacing={2}>
      {[...Array(numberShow)].map((item, i) => (
        <Grid
          key={i}
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: {
              xs: i !== 0 ? 'none' : 'block',
              sm: i === 2 ? 'none' : 'block',
              md: 'block'
            }
          }}
        >
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <Skeleton animation="wave" variant="rectangular" height={315} />
            <CardContent sx={{ pt: 3 }}>
              <Box mb={1}>
                <Skeleton animation="wave" variant="rectangular" height={40} />
              </Box>
              <Box mb={1}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="60%"
                  height={32}
                />
              </Box>
              <Box mb={1}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="15%"
                  height={28}
                />
              </Box>
              <Box mb={1}>
                <Skeleton animation="wave" variant="rectangular" height={84} />
              </Box>
              <Skeleton animation="wave" variant="rectangular" height={50} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
