import { ReactNode } from 'react';

// Props -----------------------------------------------
export interface IArtistProps {
  children?: ReactNode;
}

// State -----------------------------------------------

export interface IArtistState {
  entities: IArtist[];
  loading: 'idle' | 'pending';
  currentRequestId: string | undefined;
  error: any;
}

export interface IArtist {
  id: number;
  name: string;
  ethTotal?: number;
  address?: string;
  communityTotal?: string;
  avatar?: string;
  coverImage?: string;
  igLink?: string;
  fbLink?: string;
  ytLink?: string;
}
