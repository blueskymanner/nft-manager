import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useFormStyles = makeStyles((theme: Theme) => ({
  boxRadioGroup: {
    marginTop: '12px',
    padding: '16px',
    borderRadius: '4px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[300],
    maxHeight: '320px',
    overflowY: 'auto'
  },
  radioGroupItem: {
    margin: '0 0 12px 0',
    borderRadius: '4px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[300]
  }
}));
