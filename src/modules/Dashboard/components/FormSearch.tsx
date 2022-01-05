import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const FormSearch = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="search"
        placeholder="Search items, accounts etc.."
        fullWidth
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
      />
    </form>
  );
};
