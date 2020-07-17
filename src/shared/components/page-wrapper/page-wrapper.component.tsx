import React from 'react';
import { Helmet } from 'react-helmet';
import { Main } from 'shared/layouts';

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
    <Main>{children}</Main>
  </>
);
