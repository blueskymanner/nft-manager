import React from 'react';
import { Grid } from '@mui/material';
import { Layout, CardAuth } from 'components';
import { ForgotPasswordForm } from 'modules/Auth';

const ForgotPasswordPage: React.FC = () => {
  return (
    <Layout variant="auth" title="Forgot password">
      <CardAuth
        title="Forgot password?"
        subTitle="
            Enter your Email or Username, We'll send you a link to get back
            into your account."
      >
        <Grid container direction="column" justifyContent="center" spacing={2}>
          <ForgotPasswordForm />
        </Grid>
      </CardAuth>
    </Layout>
  );
};
export default ForgotPasswordPage;
