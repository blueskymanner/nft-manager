import React from 'react';
import { Layout } from 'components';
import { useCommonStyles } from 'themes';
import { ContactForm, ContentFAQ } from 'modules/Home';

const FAQPage: React.FC = () => {
  const classes = useCommonStyles();
  return (
    <Layout title="FAQ Page">
      <ContentFAQ />
      <ContactForm />
    </Layout>
  );
};
export default FAQPage;
