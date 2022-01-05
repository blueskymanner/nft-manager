import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useDashboardStyles = makeStyles((theme: Theme) => ({
  banner: {
    height: '123px',
    background: 'linear-gradient(180deg, #4E2699 0%, #B72EBE 100%);'
  },
  chip: {
    position: 'absolute',
    top: -103,
    left: 0,
    zIndex: 1,
    backgroundColor: '#FFF'
  },
  boxProfile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '300px'
  },
  avatar: {
    border: '2px solid #fff',
    boxShadow: '0px 4px 2px 1px rgba(0, 0, 0, 0.05)',
    marginTop: '-70px',
    marginBottom: '24px'
  }
}));
