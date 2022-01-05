import React from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Layout } from 'components';
import { redirect } from 'utils';
import { useCommonStyles } from 'themes';
import { ContactForm, ContentFAQ } from 'modules/Home';

const CreatePage: React.FC = () => {
  const classes = useCommonStyles();
  return (
    <Layout title="Raffles Page">
      <Container sx={{ pt: '160px', pb: '120px' }}>
        <Stack alignItems="flex-start">
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ fontSize: '42px', mb: 6 }}
          >
            The page is comming soon...
          </Typography>
          <Button
            variant="contained"
            size="large"
            className={classes.btnCustom}
            onClick={() => redirect('/')}
            sx={{ textTransform: 'capitalize', px: 6, py: 2 }}
          >
            Go to Home Page
          </Button>
        </Stack>
      </Container>

      <ContentFAQ />
      <ContactForm />
    </Layout>
  );
};
export default CreatePage;
