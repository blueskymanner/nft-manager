import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useCommonStyles = makeStyles((theme: Theme) => ({
  btnCustom: {
    borderRadius: 30,
    paddingTop: 16,
    paddingBottom: 16
  }
}));
