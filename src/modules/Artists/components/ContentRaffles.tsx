import React from 'react';
import { Container, Box, Button, Grid } from '@mui/material';
import { Heading } from 'components/Heading';
import { mockData } from 'modules/Posts/mockData';
import { FadeInSection } from 'hooks';
import { redirect } from 'utils';
import {
  PostItemCard,
  PostItemCardSkeleton,
  useSelectPostLoading,
  useSelectPostsData
} from 'modules/Posts';
import { isEmpty } from 'lodash';

export const ContentRaffles: React.FC = () => {
  const data = useSelectPostsData();
  const loading = useSelectPostLoading();

  return (
    <Container sx={{ pt: '100px', pb: '160px' }}>
      <FadeInSection>
        <Heading text="Raffles" style={{ marginBottom: '32px' }} />
        <Grid container spacing={2}>
          {loading !== 'pending' ? (
            !isEmpty(data) &&
            mockData.map(
              (item, i) =>
                i < 3 && (
                  <Grid item key={i} xs={12} sm={6} md={4}>
                    <PostItemCard {...item} />
                  </Grid>
                )
            )
          ) : (
            <PostItemCardSkeleton numberShow={3} />
          )}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" mt={4}>
              <Button
                color="inherit"
                variant="contained"
                onClick={() => redirect('/')}
                sx={{
                  padding: '8px 32px',
                  borderRadius: '40px',
                  boxShadow: 'none'
                }}
              >
                Show More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </FadeInSection>
    </Container>
  );
};
