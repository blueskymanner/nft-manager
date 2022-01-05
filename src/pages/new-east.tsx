import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Layout } from 'components';

const NewEastPage: React.FC = () => {
  return (
    <Layout title="News East">
      <Box
        sx={{
          height: '123px',
          background: 'linear-gradient(180deg, #4E2699 0%, #B72EBE 100%);'
        }}
      />
      <Container>
        <Typography align="center" variant="h4" mt={5}>
          News East Page
        </Typography>
        <Typography align="center" mt={3}>
          Coming soon...
        </Typography>
      </Container>
    </Layout>
  );
};
export default NewEastPage;
