import { RootState } from 'common/redux';
import { IUser } from '../../types';
import { useSelector } from 'react-redux';

export const useSelectUsersData = () =>
  useSelector<RootState, IUser[]>(state => state.user?.entities);
export const useSelectUsersLoading = () =>
  useSelector<RootState, string>(state => state.user?.loading);
