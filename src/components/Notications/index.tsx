import React from 'react';
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';
import { makeStyles } from '@mui/styles';
import { theme } from 'themes';

const useStyles = makeStyles(() => ({
  contentRoot: {
    backgroundColor: 'aqua'
  },
  variantSuccess: {
    backgroundColor: theme.palette.success.main
  },
  variantError: {
    backgroundColor: theme.palette.success.main
  },
  variantInfo: {
    backgroundColor: theme.palette.info.main
  },
  variantWarning: {
    backgroundColor: theme.palette.warning.main
  }
}));
export interface NoticationsProps extends SnackbarProviderProps {
  children: React.ReactNode;
}

export const Notications: React.FC<NoticationsProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <SnackbarProvider
      variant="success"
      autoHideDuration={3000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      classes={classes}
    >
      {children}
    </SnackbarProvider>
  );
};
