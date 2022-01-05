import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const usePostStyles = makeStyles((theme: Theme) => ({
  image: {
    maxWidth: '100%'
  },
  link: {
    display: 'block',
    transition: 'all 0.35s',
    textDecoration: 'none',
    color: theme.palette.text.primary,
    boxShadow: '0px 1px 0px #E5E5E5',
    padding: 24,

    '&:hover': {
      backgroundColor: '#F2F2F2'
    }
  },
  label: {
    backgroundColor: '#EDFFF4',
    color: '#6FCF97',
    fontWeight: 500,
    marginTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    cursor: 'pointer'
  }
}));
