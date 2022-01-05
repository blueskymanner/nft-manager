import React, { useState } from 'react';
import {
  Fade,
  IconButton,
  Menu,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

export const FormFilter = () => {
  const [value, setValue] = useState<string>('option1');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChecked = event => {
    setValue(event.target.value);
  };

  return (
    <>
      <IconButton
        size="small"
        color="inherit"
        sx={{ ml: 1 }}
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        MenuListProps={{
          'aria-labelledby': 'fade-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <RadioGroup
          name="filterPost"
          value={value}
          onChange={handleChecked}
          sx={{ padding: '0 20px 0 8px', marginBottom: 0 }}
        >
          <FormControlLabel
            value="option1"
            label={
              <Typography color="textDisabled" sx={{ fontSize: '14px' }}>
                Filter by Raffle Name
              </Typography>
            }
            control={<Radio size="small" color="default" />}
            sx={{ margin: 0 }}
          />
          <FormControlLabel
            value="option2"
            label={
              <Typography color="textDisabled" sx={{ fontSize: '14px' }}>
                Filter by Influencer
              </Typography>
            }
            control={<Radio size="small" color="default" />}
            sx={{ margin: 0 }}
          />
        </RadioGroup>
      </Menu>
    </>
  );
};
