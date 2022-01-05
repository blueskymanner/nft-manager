import React from 'react';
import { Container, Grid } from '@mui/material';
import { Layout, PageHeader } from 'components';
import { withAuth } from 'hooks';

const ProfileSettingPage: React.FC = () => {
  return (
    <Layout variant="loggned" title="Profile Settings">
      <PageHeader title="Profile Settings" />
      <Container>
        <Grid container spacing={3}>
          <Grid item md={4}></Grid>
          <Grid item md={8}></Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default withAuth(ProfileSettingPage);
