import React from 'react';
import { Typography, Card, CardMedia, CardContent, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import defaultImg from '@public/images/default.png';
import Image from 'next/image';
import ETHIcon from '@public/images/icon-eth.svg';
import { IArtist } from 'modules/Artists';

export const ArtistItem: React.FC<IArtist> = ({ name, avatar }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        cursor: 'pointer',
        padding: '32px',
        borderRadius: '16px',
        ':hover': {
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)'
        }
      }}
    >
      <CardMedia
        component="img"
        title={name}
        alt={name}
        height="352"
        image={`/images/${avatar ? avatar : defaultImg.src}`}
      />
      <CardContent sx={{ padding: '24px 0 0 0!important' }}>
        <Box mb={1}>
          <Typography
            component="span"
            sx={{
              fontSize: '20px'
            }}
          >
            {name}
          </Typography>
          <CheckCircleIcon
            sx={{
              fontSize: '16px',
              color: '#56CCF2',
              ml: 1,
              verticalAlign: 'middle'
            }}
          />
        </Box>
        <Box display="flex" alignItems="center">
          <Image src={ETHIcon} alt="Icon" width={10} height={15} />
          <Typography sx={{ fontSize: '18px', ml: 1 }}>1,600.67</Typography>
          <Typography
            color="success.light"
            sx={{ fontSize: '18px', ml: 'auto' }}
          >
            +67.89%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
