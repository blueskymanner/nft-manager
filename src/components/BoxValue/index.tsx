import { Box, Typography } from '@mui/material';
import React from 'react';

export interface BoxValueProps {
  childreen?: React.ReactNode;
  text?: string;
}

export const BoxValue: React.FC<BoxValueProps> = ({
  childreen,
  text,
  ...props
}) => {
  return (
    <Box
      sx={{
        marginTop: '12px',
        backgroundColor: '#F8F7F7',
        color: '#545454',
        padding: '12px 10px',
        borderRadius: '4px'
      }}
      {...props}
    >
      {text ? <Typography>00 / 00 / 0000 at 23:00 +GMT</Typography> : childreen}
    </Box>
  );
};
