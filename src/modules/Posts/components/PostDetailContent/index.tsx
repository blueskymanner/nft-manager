import React, { useEffect } from 'react';
import { Grid, Stack, Box, Typography, IconButton, Chip } from '@mui/material';
import { useAppDispatch } from 'common/hooks';
import {
  actionsUser,
  useSelectUsersData,
  useSelectUsersLoading
} from 'modules/Users';
import TicketIcon from '@public/images/ticket.svg';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Image from 'next/image';
import { ContentRafflesBuyers } from './ContentRafflesBuyers';
import { ContentRafflesWinners } from './ContentRafflesWinners';

export const PostDetailContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const entities = useSelectUsersData();
  const loading = useSelectUsersLoading();

  useEffect(() => {
    dispatch(actionsUser.fetchUsers());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={6}>
        <Stack
          sx={{
            borderRadius: 2,
            borderWidth: '1px',
            borderColor: '#E0E0E0',
            borderStyle: 'solid',
            padding: 2
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Image src={TicketIcon} alt="TicketIcon" />
            <Typography sx={{ fontSize: '18px', fontWeight: 600, ml: 1 }}>
              Raffles sold:
            </Typography>
            <IconButton size="small" sx={{ ml: 'auto', mr: -1 }}>
              <EditIcon />
            </IconButton>
          </Box>
          <Typography
            color="text.disabled"
            variant="h2"
            sx={{ fontWeight: 500, color: '#828282' }}
          >
            1 / 200
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack
          sx={{
            borderRadius: 2,
            borderWidth: '1px',
            borderColor: '#E0E0E0',
            borderStyle: 'solid',
            padding: 2
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <VisibilityIcon />
            <Typography sx={{ fontSize: '18px', fontWeight: 600, ml: 1 }}>
              Visibility :
            </Typography>
            <Chip
              icon={
                <ArrowUpwardIcon sx={{ ml: 6, color: 'rgba(0, 0, 0, 0.54)' }} />
              }
              label={
                <Typography color="textSecondary" sx={{ fontSize: '12px' }}>
                  Feature
                </Typography>
              }
              sx={{ ml: 'auto' }}
            />
          </Box>
          <Typography
            variant="h2"
            color="text.disabled"
            sx={{ fontWeight: 500 }}
          >
            100
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h3"
          sx={{ mt: 2, fontSize: '18px', fontWeight: 600 }}
        >
          Raffles Buyers
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ContentRafflesBuyers />
      </Grid>
      <Grid item xs={12}>
        <Typography
          component="h3"
          sx={{ mt: 2, fontSize: '18px', fontWeight: 600 }}
        >
         Raffles Winners
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ContentRafflesWinners />
      </Grid>
    </Grid>
  );
};
