import React from 'react';
import { Container, Box, Typography, Stack, Grid } from '@mui/material';
import { data } from '../mockData';
import { Heading } from 'components/Heading';
import { FadeInSection } from 'hooks';

export const ContentFAQ: React.FC = () => {
  return (
    <Container sx={{ py: '100px' }}>
      <FadeInSection>
        <Heading text="FAQ’s" style={{ marginBottom: '32px' }} />
        <Stack>
          {data.map((item, i) => (
            <Box
              key={i}
              sx={{
                border: '1px solid #E0E0E0',
                borderRadius: '16px',
                padding: '32px 42px',
                mb: 1.5
              }}
            >
              <Typography
                color="text.disabled"
                variant="h5"
                sx={{ mb: 1, fontWeight: 500 }}
              >
                {item.title}
              </Typography>
              <Typography
                component="p"
                color="text.secondary"
                sx={{ fontSize: '18px' }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </Box>
          ))}
        </Stack>
      </FadeInSection>
    </Container>
  );
};
