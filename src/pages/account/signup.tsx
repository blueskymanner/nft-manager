import React from 'react';
import { Grid } from '@mui/material';
import { CardAuth, Layout } from 'components';
import { SignUpForm } from 'modules/Auth';

const SignUpPage: React.FC = () => {
  return (
    <Layout variant="auth" title="Sign Up">
      <CardAuth title="Sign Up" subTitle="Enter your credentials to continue">
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <SignUpForm />
        </Grid>
      </CardAuth>
    </Layout>
  );
};
export default SignUpPage;
