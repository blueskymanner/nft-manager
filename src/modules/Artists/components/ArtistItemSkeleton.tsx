import React from 'react';
import { Card, CardContent, Box, Skeleton, Grid } from '@mui/material';

interface ArtistItemSkeletonProps {
  numberShow?: number;
}

export const ArtistItemSkeleton: React.FC<ArtistItemSkeletonProps> = ({
  numberShow
}) => {
  return (
    <Grid container spacing={2}>
      <h1>aaaa</h1>
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
          <Card
            variant="outlined"
            sx={{
              cursor: 'pointer',
              padding: '32px',
              borderRadius: '16px',
              ':hover': {
                boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)'
              }
            }}
          >
            <Skeleton animation="wave" variant="rectangular" height={352} />
            <CardContent sx={{ padding: '24px 0 0 0!important' }}>
              <Box mb={1}>
                <Skeleton animation="wave" variant="rectangular" height={30} />
              </Box>
              <Box mb={1}>
                <Skeleton animation="wave" variant="rectangular" height={27} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
