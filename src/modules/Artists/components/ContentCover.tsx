import React from 'react';
import { Container, Typography, Stack, Button, Box } from '@mui/material';
import { useCommonStyles } from 'themes';
import { redirect } from 'utils';
import Cover from '@public/images/cover.png';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IArtist } from '../types';

export const ContentCover: React.FC<IArtist> = ({
  id,
  name,
  address,
  communityTotal,
  coverImage,
  ...props
}) => {
  const classes = useCommonStyles();
  return (
    <Container>
      <Box display="flex" flexWrap="wrap" mt={4}>
        <Stack
          alignItems="flex-start"
          justifyContent="center"
          sx={{
            py: 5,
            width: { xs: '100%', md: '40%' }
          }}
        >
          <Typography
            variant="h2"
            color="text.primary"
            sx={{ fontSize: '42px', mb: 2 }}
          >
            <span>{name}</span>

            <CheckCircleIcon
              sx={{
                fontSize: '16px',
                color: '#56CCF2',
                ml: 1,
                mt: -3,
                verticalAlign: 'middle'
              }}
            />
          </Typography>
          <Typography
            component="p"
            color="text.disabled"
            variant="h5"
            sx={{ mb: 4, fontWeight: 400 }}
          >
            {address} <br />
            {communityTotal} community
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
        <Box
          sx={{
            width: { xs: '100%', md: '60%' }
          }}
        >
          <Image src={Cover} alt="cover" layout="responsive" />
        </Box>
      </Box>
    </Container>
  );
};
