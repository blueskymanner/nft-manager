import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { useSnackbar } from 'notistack';
import { theme } from 'themes';
import { formatWalletAddress } from 'utils';

export interface TextCopyProps {
  text: string | undefined;
  textColor?: any;
  iconColor?: any;
  className?: string;
}

export const TextCopy: React.FC<TextCopyProps> = ({
  text = '',
  textColor = theme.palette.text.secondary,
  iconColor = theme.palette.grey[500],
  className
}) => {
  const { enqueueSnackbar } = useSnackbar();

  const copyToClipBoard = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      enqueueSnackbar('Wallet ID copied');
    } catch (err) {
      enqueueSnackbar('Failded to copy', { variant: 'error' });
    }
  };

  return (
    <div className={className}>
      <Box display="flex" alignItems="center">
        <Box mr={0.75}>
          <Typography style={{ color: textColor }}>
            {formatWalletAddress(text)}
          </Typography>
        </Box>
        <IconButton
          size="small"
          color="inherit"
          onClick={() => copyToClipBoard(text)}
        >
          <FileCopyOutlinedIcon fontSize="small" style={{ color: iconColor }} />
        </IconButton>
      </Box>
    </div>
  );
};
