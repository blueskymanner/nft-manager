import React from 'react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { EnhanceCountDown } from 'components';
import { IPost } from 'modules/Posts';
import { redirect } from 'utils';
import { useCommonStyles } from 'themes';
import Truncate from 'react-truncate';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import defaultImg from '@public/images/default.png';

interface PostItemCardProps extends IPost {
  hideCountDown?: boolean;
}

export const PostItemCard: React.FC<PostItemCardProps> = ({
  id,
  name,
  image,
  influencer,
  price,
  description,
  timeStart,
  timeEnd,
  hideCountDown = false
}) => {
  const classes = useCommonStyles();
  return (
    <Card variant="outlined" sx={{ borderRadius: 2 }}>
      <CardMedia
        component="img"
        alt={name}
        height="315"
        image={`/images/${image ? image : defaultImg.src}`}
        title={name}
      />
      <CardContent sx={{ pt: 3 }}>
        <Box display="flex" alignItems="center" mb={1}>
          <Badge
            overlap="circular"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            variant="dot"
            color="success"
          >
            <Avatar alt="Remy Sharp" src="/images/artist1.jpg" />
          </Badge>
          <Typography sx={{ ml: '12px', flex: 1 }}>
            <Truncate lines={1}>{influencer}</Truncate>
          </Typography>
        </Box>

        <Box mb={1}>
          <Typography variant="h6" component="span">
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
        <Typography
          variant="h6"
          color="text.disabled"
          sx={{ fontSize: '18px', my: 1 }}
        >
          $ {price}
        </Typography>
        <Typography color="text.disabled" variant="body2" sx={{ mb: 3 }}>
          <Truncate lines={4}>{description}</Truncate>
        </Typography>
        {!hideCountDown && (
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
            <EnhanceCountDown
              variant="2"
              dateStart={timeStart}
              dateEnd={timeEnd}
            />
          </Box>
        )}

        <Button
          variant="contained"
          size="large"
          className={classes.btnCustom}
          onClick={() => redirect(`/post/checkout/${id}`)}
          fullWidth
          sx={{ textTransform: 'capitalize' }}
        >
          See more
        </Button>
      </CardContent>
    </Card>
  );
};
