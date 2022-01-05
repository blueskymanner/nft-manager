import React, { useEffect, useState } from 'react';
import { Box, Stack, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { COUNTDOWN_STATUS } from 'constants/common';
import { useInterval } from 'hooks';
import { twoDigits } from 'utils';
import moment from 'moment';

const calculateTimeLeft = () => {
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  let year = new Date().getFullYear();
  const difference = +new Date(`${year}-12-11`) - +new Date();

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    color: theme.palette.text.disabled,
    fontSize: '10px',
    letterSpacing: '0.2em'
  },
  value: {
    color: theme.palette.text.disabled,
    fontSize: '40px',
    lineHeight: '60px',
    fontWeight: 700
  }
}));

interface EnhanceCountDownProps {
  dateStart?: number;
  dateEnd?: number;
  variant?: '1' | '2';
}

export const EnhanceCountDown: React.FC<EnhanceCountDownProps> = ({
  dateStart = 0,
  dateEnd = 0,
  variant = '1'
}) => {
  const classes = useStyles();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <Box
      display="flex"
      alignItems="flex-end"
      sx={{ ml: '-8px' }}
      justifyContent={variant === '2' ? 'center' : undefined}
    >
      <Stack alignItems="center" sx={{ px: 0.5, minWidth: '70px' }}>
        <Typography className={classes.label}>DAYS</Typography>
        <Typography className={classes.value}>{timeLeft?.days}</Typography>
      </Stack>
      <Typography className={classes.value}>:</Typography>
      <Stack alignItems="center" sx={{ px: 0.5, minWidth: '70px' }}>
        <Typography className={classes.label}>HOURS</Typography>
        <Typography className={classes.value}>{timeLeft?.hours}</Typography>
      </Stack>
      <Typography className={classes.value}>:</Typography>
      <Stack alignItems="center" sx={{ px: 0.5, minWidth: '70px' }}>
        <Typography className={classes.label}>MINUTES</Typography>
        <Typography className={classes.value}>{timeLeft?.minutes}</Typography>
      </Stack>
      <Typography className={classes.value}>:</Typography>
      <Stack alignItems="center" sx={{ px: 0.5, minWidth: '70px' }}>
        <Typography className={classes.label}>SECONDS</Typography>
        <Typography className={classes.value}>{timeLeft?.seconds}</Typography>
      </Stack>
    </Box>
  );
};
