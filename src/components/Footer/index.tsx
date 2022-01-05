import React from 'react';
import { theme } from 'themes';
import { Container, Typography, Divider } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: theme.palette.common.black }}>
      <Container>
        <Typography
          color="white"
          variant="h6"
          align="center"
          sx={{ pt: 8, pb: 3 }}
        >
          Velvet
        </Typography>
        <Divider />
        <Typography
          color="white"
          variant="caption"
          component="p"
          align="center"
          sx={{ pt: 4, pb: 2 }}
        >
          © 2021 All Rights Reserved
        </Typography>
      </Container>
    </footer>
  );
};
