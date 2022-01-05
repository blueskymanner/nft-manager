import { RootState } from 'common/redux';
import { useSelector } from 'react-redux';
import { IUser } from 'modules/Users';

export const useSelectAuthLoading = () =>
  useSelector<RootState, string>(state => state.auth?.loading);

// User
export const useSelectCurrentUser = () =>
  useSelector<RootState, IUser>(state => state.auth?.currentUser);

export const useSelectUserRole = () => useSelector<RootState, number>(() => 1);

export const useSelectUserId = () =>
  useSelector<RootState, string | number | undefined>(
    state => state.auth?.currentUser?.id
  );
