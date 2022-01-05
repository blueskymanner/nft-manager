import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import { PostCreatePreview, PostCreateForm } from 'modules/Posts';
import { Layout, PageHeader } from 'components';
import { withAuth } from 'hooks';

const CreatePostPage: React.FC = () => {
  const [preview, setPreview] = useState<boolean>(false);
  return (
    <Layout
      variant="loggned"
      title={preview ? 'Preview Raffle name' : 'Create a raffle campaign'}
    >
      <PageHeader
        title={preview ? 'Preview Raffle name' : 'Create a raffle campaign'}
      />
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Box mt={4} mb={8}>
              {preview ? (
                <PostCreatePreview />
              ) : (
                <PostCreateForm onShowPreview={show => setPreview(show)} />
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export default withAuth(CreatePostPage);
