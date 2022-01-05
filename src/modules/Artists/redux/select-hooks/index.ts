import { RootState } from 'common/redux';
import { useSelector } from 'react-redux';
import { IArtist } from '../../types';

export const useSelectArtistsData = () =>
  useSelector<RootState, IArtist[]>(state => state.artist?.entities);

export const useSelectArtistLoading = () =>
  useSelector<RootState, string>(state => state.artist?.loading);
