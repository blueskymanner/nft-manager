import React from 'react';
import { Box, Button, Chip, Container, Typography, Grid } from '@mui/material';
import { ButtonConnectWallet, Layout } from 'components';
import { useDashboardStyles } from 'themes';
import { PostList } from 'modules/Posts';
import { ContentProfile, FormSearch, FormFilter } from 'modules/Dashboard';
import { redirect } from 'utils';
import { useSelectWalletConnected } from 'modules/App';
import { withAuth } from 'hooks';

const DashboardPage = () => {
  const classes = useDashboardStyles();
  const walletConnected = useSelectWalletConnected();

  const renderCreatePostButton = () => (
    <Button
      onClick={() => redirect('/post/create')}
      variant="contained"
      size="large"
      sx={{ mb: 3 }}
    >
      CREATE RAFFLE CAMPAIGN
    </Button>
  );

  return (
    <Layout variant="loggned" title="Dashboard">
      <div className={classes.banner} />
      <Container>
        <Box
          position="relative"
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={12}
        >
          <Chip label="Admin Account" className={classes.chip} />
          <ContentProfile />
          <Box mt={4}>
            <ButtonConnectWallet />
          </Box>
          {!walletConnected ? (
            <Box mt={10}>{renderCreatePostButton()}</Box>
          ) : (
            <Box sx={{ mt: 6, width: '100%' }}>
              <Grid container>
                <Grid item xs={12} display="flex" justifyContent="flex-end">
                  {renderCreatePostButton()}
                </Grid>
                <Grid item lg={8}>
                  <Box display="flex" alignItems="center">
                    <Typography component="h3" variant="h5">
                      Raffles
                    </Typography>
                    <FormFilter />
                  </Box>
                </Grid>
                <Grid item lg={4}>
                  <FormSearch />
                </Grid>
              </Grid>
              <PostList />
            </Box>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default withAuth(DashboardPage);
