import { ReactNode } from 'react';

// Props -----------------------------------------------
export interface IPostProps {
  children?: ReactNode;
}

// State -----------------------------------------------

export interface IPostState {
  entities: IPost[];
  loading: 'idle' | 'pending';
  currentRequestId: string | undefined;
  error: any;
}

export interface IPost {
  id: number | string;
  userId: number | string;
  name?: string;
  image?: string;
  influencer?: number | string;
  description?: string;
  timeStart?: number;
  timeEnd?: number;
  price?: number;
  paymentMethod?: string;
  walletQuantity?: number;
  totalTicket?: number;
  numberOfWinners?: number;
  status?: string;
  winners?: number;
  createdDate?: number;
  updatedDate?: number;
  disabled?: boolean;
  isFeature?: boolean;
}

export interface ICreateForm {
  name?: string;
  image?: string;
  influencer?: number | string;
  description?: string;
  timeStart?: any;
  timeEnd?: any;
  price?: number;
  paymentMethod?: string;
  walletQuantity?: number;
  totalTicket?: number;
  numberOfWinners?: number;
}
