import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { theme } from 'themes';

interface CardAuthProps {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const CardAuth: React.FC<CardAuthProps> = ({ title, subTitle, children }) => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        maxWidth: '440px',
        mt: 5,
        mb: 5,
        minHeight: 'calc(100vh - 88px)'
      }}
    >
      <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
        <CardContent>
          {subTitle && <Typography gutterBottom>{subTitle}</Typography>}
          <Typography
            component="h1"
            variant="h4"
            sx={{ marginBottom: '40px', color: theme.palette.grey[900] }}
          >
            {title}
          </Typography>

          {children}
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CardAuth;
