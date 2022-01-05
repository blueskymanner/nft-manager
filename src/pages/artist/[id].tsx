import React, { useEffect, useState } from 'react';
import { size } from 'lodash';
import { useRouter } from 'next/router';
import { IPost, useSelectPostsData } from 'modules/Posts';
import { Layout } from 'components';
import {
  actionsArtist,
  ContentCover,
  ContentFeatured,
  ContentRaffles,
  IArtist,
  useSelectArtistsData
} from 'modules/Artists';
import { useAppDispatch } from 'common/hooks';

const ArtistDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = router.query;

  const artistsData = useSelectArtistsData();
  const [artistData, setArtistData] = useState<IArtist>();

  const postsData = useSelectPostsData();
  const [postData, setPostData] = useState<IPost>();

  useEffect(() => {
    if (!id || !size(postsData)) return;
    let newData = {} as IArtist;
    artistsData.map((artist: IArtist) => {
      if (artist.id === +id) {
        newData = artist;
      }
    });
    setArtistData(newData);
  }, [id, artistsData]);

  useEffect(() => {
    if (!id || !size(postsData)) return;
    let newData = {} as IPost;
    postsData.map((post: IPost) => {
      if (post.id === +id) {
        newData = post;
      }
    });
    setPostData(newData);
  }, [id, postsData]);

  return (
    <Layout title="Home">
      <ContentCover {...(artistData as any)} />
      <ContentFeatured {...(postData as any)} />
      <ContentRaffles />
    </Layout>
  );
};
export default ArtistDetailPage;
