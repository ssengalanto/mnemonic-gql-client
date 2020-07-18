import React from 'react';
import { Helmet } from 'react-helmet';
import { animated } from 'react-spring';

import { Col } from 'shared/components';
import { useFadeSpring } from 'shared/hooks';

import { Main } from '../main';
import { Footer } from '../footer';
import { S } from './page-wrapper.styles';
import { HeaderContainer } from '../header';

interface Props {
  title: string;
  description: string;
  full?: boolean;
}

const AnimatedRow = animated(S.Row);

export const PageWrapper: React.FC<Props> = ({ children, title, description, full }) => {
  const { fade } = useFadeSpring();

  return (
    <AnimatedRow direction="column" style={fade}>
      <Col>
        <Helmet data-test-id="page-helmet">
          <title>{title} – Mnemonic</title>
          <meta name="description" content={description} />
        </Helmet>
        {full && <HeaderContainer data-test-id="page-wrapper:header" />}
        <Main>{children}</Main>
      </Col>
      {full && <Footer data-test-id="page-wrapper:footer" />}
    </AnimatedRow>
  );
};
