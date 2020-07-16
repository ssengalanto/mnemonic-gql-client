import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description: string;
}

export const PageWrapper: React.FC<Props> = ({ children, title, description }) => (
  <>
    <Helmet data-test-id="page-helmet">
      <title>{title} – Mnemonic</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </>
);
