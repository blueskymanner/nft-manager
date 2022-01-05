import React from 'react';
import { IUser } from 'modules/Users';

export interface IAuthProps {
  children: React.ReactNode;
}

export interface IAuthState {
  accessToken: {
    token: string;
    time: string;
  };
  currentUser: IUser;
  loading: 'idle' | 'pending';
  currentRequestId: string | undefined;
  error: any;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IRegisterFormInput {
  fullname: string;
  email: string;
  passwordConfirm: string;
  confirmPassword: string;
  recapcha: string;
}

export interface IUserInfo {
  userId: string;
}
