import React from 'react';
import { useRouter } from 'next/router';
import { IAuthProps } from 'modules/Auth';
import { getToken } from 'common/localStorage';

const PATH_EXCLUDED_AUTHENTICATION = [
  '/',
  '/raffles',
  '/faq',
  '/create',
  '/account/signin',
  '/account/signup',
  '/account/register',
  '/account/forgot-password',
  `/astist/*`
];

export const AuthProvider: React.FC<IAuthProps> = ({ children }) => {
  const Router = useRouter();
  const isAuthenticated = getToken();
  console.log('token', isAuthenticated);

  if (
    !isAuthenticated &&
    !PATH_EXCLUDED_AUTHENTICATION.includes(Router.pathname)
  ) {
    Router.replace('/account/signin');
    return null;
  }

  if (
    isAuthenticated &&
    PATH_EXCLUDED_AUTHENTICATION.includes(Router.pathname)
  ) {
    Router.replace('/dashboard');
    return null;
  }

  return <>{children}</>;
};
