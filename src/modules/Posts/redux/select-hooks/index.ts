import { RootState } from 'common/redux';
import { useSelector } from 'react-redux';
import { IPost } from 'modules/Posts';

export const useSelectPostsData = () =>
  useSelector<RootState, IPost[]>(state => state.post?.entities);

export const useSelectPostLoading = () =>
  useSelector<RootState, string>(state => state.post?.loading);
