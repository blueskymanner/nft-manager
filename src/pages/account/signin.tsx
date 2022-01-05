import React from 'react';
import { Grid } from '@mui/material';
import { CardAuth, Layout } from 'components';
import { SignInForm } from 'modules/Auth';

const SignInPage: React.FC = () => {
  return (
    <Layout variant="auth" title="Login to your account">
      <CardAuth title="Login to your account" subTitle="Welcome back">
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <SignInForm />
        </Grid>
      </CardAuth>
    </Layout>
  );
};
export default SignInPage;
