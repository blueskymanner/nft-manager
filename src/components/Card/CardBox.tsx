import { Box } from '@mui/material';
import React from 'react';

interface CardBoxProps {
  children: React.ReactNode;
  className?: string;
}

const CardBox: React.FC<CardBoxProps> = ({ children, className }) => {
  return (
    <Box
      p={2}
      mt={2}
      borderRadius={4}
      border="1px solid #E5E5E5"
      className={className}
    >
      {children}
    </Box>
  );
};
export default CardBox;
