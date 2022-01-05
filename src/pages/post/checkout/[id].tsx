import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { CardAuth, Layout } from 'components';
import { PaymentForm } from 'modules/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const BuyRafflesPage: React.FC = () => {
  const [stripePromise] = useState(() =>
    loadStripe(
      'pk_test_51K4jTmCJcdSSFDiW6aOxtbtF6d0XoCE97u55AckqWxqTQpIJFsFSkcgYDkfItcoYJHQtPdnOYShk6kGb3A8R4ytz00M1RZBFyF'
    )
  );
  console.log(stripePromise);
  return (
    <Layout variant="auth" title="Buy raffles">
      <Elements stripe={stripePromise}>
        <CardAuth title="Title of the raffle" subTitle="Title of the raffle">
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={2}
          ></Grid>
        </CardAuth>
      </Elements>
    </Layout>
  );
};
export default BuyRafflesPage;
