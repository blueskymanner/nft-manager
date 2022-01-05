import React from 'react';
import { Link as NavLink, LinkProps } from '@mui/material';
import Link from 'next/link';
import { theme } from 'themes';

export interface EnhanceLinkProps extends LinkProps {
  name?: string;
  url: string;
  children?: React.ReactNode;
}

export const EnhanceLink: React.FC<EnhanceLinkProps> = ({
  name,
  url,
  sx,
  children,
  className,
  ...props
}) => {
  return (
    <Link href={url}>
      {name ? (
        <NavLink
          href="#"
          sx={{ ...sx, transition: 'all 0.25s', '&:hover': { opacity: 0.85 } }}
          {...props}
        >
          {name}
        </NavLink>
      ) : (
        <a
          className={className}
          style={{ color: theme.palette.text.primary, textDecoration: 'none' }}
        >
          {children}
        </a>
      )}
    </Link>
  );
};
