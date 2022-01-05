import React from 'react';
import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import defaultImg from '@public/images/default.png';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) => ({
  thumbnail: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: 0,
    marginBottom: 0,
    overflow: 'hidden',
    '&> img': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: 1,
      width: '100%',
      height: '100%',
      transform: 'translate(-50%, -50%)',
      objectFit: 'cover',
      objectPosition: 'center',
      marginBottom: 0
    }
  }
}));

interface EnhanceImageProps {
  imageUrl?: string;
  className?: string;
}
export const EnhanceImage: React.FC<EnhanceImageProps> = ({
  imageUrl,
  className,
  ...props
}) => {
  const classes = useStyles();
  return (
    <Box className={clsx(classes.thumbnail, className)} {...props}>
      <img
        src={`/images/${imageUrl ? imageUrl : defaultImg.src}`}
        alt="thumbnail"
      />
    </Box>
  );
};
