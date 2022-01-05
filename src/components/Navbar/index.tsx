import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { EnhanceLinkProps } from 'components';
import { ListItemText, MenuItem, MenuList, Theme } from '@mui/material';
import { redirect } from 'utils';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      padding: '32px 16px'
    }
  }
}));

export interface NavbarProps {
  className?: string;
  data: EnhanceLinkProps[];
}

export const Navbar: React.FC<NavbarProps> = ({ data = [], className }) => {
  const classes = useStyles();
  return (
    <MenuList className={clsx(classes.root, className)}>
      {data?.map((item, i) => (
        <MenuItem
          key={i}
          onClick={() => redirect(item.url)}
          sx={{
            mx: { md: 4 },
            px: { xs: 3, md: 3 },
            py: { xs: 1, md: 0.75 },
            ':hover': {
              borderRadius: '40px'
            }
          }}
        >
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      ))}
    </MenuList>
  );
};
