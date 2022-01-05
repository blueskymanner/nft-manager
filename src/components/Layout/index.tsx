import React, { Fragment, ReactNode } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { Footer, Header } from 'components';
import { Box, Grid } from '@mui/material';
import BackgroundImage from '@public/images/background.jpg';
import { useAuthStyles } from 'themes';

export interface LayoutProps {
  title?: string;
  description?: string;
  className?: string;
  children: ReactNode;
  variant?: 'default' | 'auth' | 'loggned';
}
export const Layout = ({
  title,
  description,
  children,
  className,
  variant = 'default'
}: LayoutProps) => {
  const classes = useAuthStyles();

  return (
    <Fragment>
      <Head>
        <title>{title} | Velsel</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
        {variant === 'default' && (
          <>
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </>
        )}
      </Head>
      {variant !== 'auth' && <Header variant={variant} />}
      <Box
        component="main"
        className={clsx(
          'main-container',
          className,
          variant === 'auth' && classes.layoutAuth,
          variant === 'default' && classes.layoutDefault
        )}
      >
        {variant === 'auth' ? (
          <Grid container sx={{ height: '100vh' }}>
            <Grid
              item
              xs={false}
              md={5}
              sx={{
                backgroundImage: `url(${BackgroundImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <Grid
              item
              xs={12}
              md={7}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {children}
            </Grid>
          </Grid>
        ) : (
          children
        )}
      </Box>
      {variant === 'default' && <Footer />}
    </Fragment>
  );
};
