import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useAuthStyles = makeStyles((theme: Theme) => ({
  layoutAuth: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  layoutDefault: {
    marginTop: '68px'
  },
  button: {
    textTransform: 'none',
    paddingTop: '8px',
    paddingBottom: '8px',
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    lineHeight: '24px',
    letterSpacing: '0.25px',
    minHeight: '50px',
    fontWeight: 700
  }
}));
