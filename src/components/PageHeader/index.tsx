import React from 'react';
import { Typography, Container, Box, IconButton, Theme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import { redirect } from 'utils';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontSize: '22px',
    color: '#FFF',
    backgroundColor: theme.palette.grey[700],
    padding: theme.spacing(1.5, 0)
  },
  title: {
    fontSize: '22px',
    fontWeight: 500
  },
  icon: {
    color: '#fff',
    marginRight: theme.spacing(2)
  }
}));

export interface PageHeaderProps {
  title: string;
  urlRedirect?: string;
  marginBottom?: number;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  urlRedirect,
  marginBottom = 3
}) => {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    urlRedirect ? redirect(urlRedirect) : router.back();
  };

  return (
    <Box mb={marginBottom}>
      <div className={classes.root}>
        <Container>
          <Box display="flex" alignItems="center">
            <IconButton size="small" color="inherit" onClick={handleClick}>
              <ArrowBackIcon className={classes.icon} />
            </IconButton>
            <Typography component="h1" variant="h4" className={classes.title}>
              {title}
            </Typography>
          </Box>
        </Container>
      </div>
    </Box>
  );
};
