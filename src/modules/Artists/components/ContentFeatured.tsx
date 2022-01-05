import React from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Badge,
  Avatar,
  Button,
  Chip,
  Stack
} from '@mui/material';
import { FadeInSection } from 'hooks';
import { IPost } from 'modules/Posts';
import Truncate from 'react-truncate';
import { theme, useCommonStyles } from 'themes';
import { EnhanceCountDown } from 'components';
import { redirect } from 'utils';
import Image from 'next/image';
import Banner from '@public/images/banner.jpg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ContentFeaturedProps extends IPost {
  isPurchased?: boolean;
}

export const ContentFeatured: React.FC<ContentFeaturedProps> = ({
  id,
  userId,
  name,
  image,
  influencer,
  description,
  timeStart,
  timeEnd,
  price,
  paymentMethod,
  walletQuantity,
  totalTicket,
  numberOfWinners,
  status,
  winners,
  disabled,
  isFeature,
  isPurchased = false
}) => {
  const classes = useCommonStyles();

  return (
    <Container sx={{ py: '100px' }}>
      <FadeInSection>
        <Chip
          label="featured Raffle"
          sx={{
            py: 1,
            px: 3,
            height: '44px',
            letterSpacing: '1px',
            borderRadius: '60px',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '16px',
            backgroundColor: theme.palette.grey[100],
            color: theme.palette.text.disabled
          }}
        />
        <Box display="flex" flexWrap="wrap" mt={4}>
          <Stack
            justifyContent="center"
            sx={{
              border: '1px solid #ddd',
              width: { xs: '100%', md: '50%' },
              pt: 7,
              pl: 4,
              pr: 7,
              pb: 4
            }}
          >
            <Typography variant="h3" component="span">
              {name}
            </Typography>

            <Typography variant="h6" color="primary" sx={{ my: 1 }}>
              {isPurchased ? (
                <span>Winner Ticket #{id}</span>
              ) : (
                <span>$ {price}</span>
              )}
            </Typography>
            <Typography color="text.secondary" variant="body2" sx={{ mb: 3 }}>
              <Truncate lines={4}>{description}</Truncate>
            </Typography>
            {!isPurchased && (
              <Box mb={2}>
                <Typography
                  component="div"
                  variant="caption"
                  sx={{
                    letterSpacing: '1px',
                    mb: 2,
                    fontWeight: 700,
                    marginBottom: 2
                  }}
                >
                  Raffle Reveal
                </Typography>
                <EnhanceCountDown dateStart={timeStart} dateEnd={timeEnd} />
              </Box>
            )}
            {!isPurchased ? (
              <Button
                variant="contained"
                size="large"
                className={classes.btnCustom}
                onClick={() => redirect(`/post/checkout/${id}`)}
                fullWidth
                sx={{ textTransform: 'capitalize', py: 1.5 }}
              >
                Buy now
              </Button>
            ) : (
              <Box display="flex" alignItems="center">
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<CheckCircleIcon />}
                  onClick={() => false}
                  disableElevation
                  sx={{
                    textTransform: 'capitalize',
                    px: 3,
                    py: 1.5,
                    mr: 3,
                    borderRadius: '40px',
                    minWidth: '180px'
                  }}
                >
                  Purchased
                </Button>
                <Button
                  color="inherit"
                  variant="contained"
                  size="large"
                  onClick={() => redirect(`/post/checkout/${id}`)}
                  sx={{
                    textTransform: 'capitalize',
                    px: 3,
                    py: 1.5,
                    borderRadius: '40px',
                    minWidth: '180px',
                    boxShadow: 'none'
                  }}
                >
                  See More
                </Button>
              </Box>
            )}
          </Stack>
          <Box
            sx={{
              width: { xs: '100%', md: '50%' }
            }}
          >
            <Image src={Banner} alt="banner" layout="responsive" />
          </Box>
        </Box>
      </FadeInSection>
    </Container>
  );
};
