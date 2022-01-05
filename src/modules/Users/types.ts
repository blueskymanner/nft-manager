import { ReactNode } from 'react';

// Props -----------------------------------------------
export interface IUserProps {
  children?: ReactNode;
}

// State -----------------------------------------------

export interface IUserState {
  entities: IUser[];
  loading: 'idle' | 'pending';
  currentRequestId: string | undefined;
  error: any;
}

export interface IUser {
  id?: string | number;
  name?: string;
  password?: string;
  email?: string;
  wallet?: string;
  role?: Role;
}

export enum Role {
  MEMBER, // 0
  ORGANIZER // 1
}
