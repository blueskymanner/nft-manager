import React from 'react';
import { Container, Typography, Stack, Button } from '@mui/material';
import { useCommonStyles } from 'themes';
import { redirect } from 'utils';

export const ContentCover: React.FC = () => {
  const classes = useCommonStyles();
  return (
    <Container sx={{ pt: '160px', pb: '120px' }}>
      <Stack alignItems="flex-start">
        <Typography
          variant="h2"
          color="text.primary"
          sx={{ fontSize: '42px', mb: 2 }}
        >
          Discover exclusive perks from <br />
          your favorite influencers
        </Typography>
        <Typography
          component="p"
          color="text.disabled"
          variant="h5"
          sx={{ mb: 4, fontWeight: 400 }}
        >
          on the world’s most exclusive NFT raffle platform
        </Typography>
        <Button
          variant="contained"
          size="large"
          className={classes.btnCustom}
          onClick={() => redirect('/')}
          sx={{ textTransform: 'capitalize', px: 6, py: 2 }}
        >
          Explore
        </Button>
      </Stack>
    </Container>
  );
};
