import React, { useEffect } from 'react';
import { Layout } from 'components';
import {
  ContactForm,
  ContentFAQ,
  ContentRaffles,
  ContentCover,
  ContentArtists
} from 'modules/Home';
import { actionsArtist } from 'modules/Artists';
import { useAppDispatch } from 'common/hooks';
import { actionsPost } from 'modules/Posts';

export default function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionsArtist.fetchArtists());
    dispatch(actionsPost.fetchPosts());
  }, []);

  return (
    <Layout title="Home">
      <ContentCover />
      <ContentArtists />
      <ContentRaffles />
      <ContentFAQ />
      <ContactForm />
    </Layout>
  );
}
