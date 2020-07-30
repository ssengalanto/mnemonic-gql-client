import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { HomeContainer } from 'modules/home';
import { PageWrapper } from 'shared/layouts';

interface Props extends RouteComponentProps {}

const HomePage: React.FC<Props> = () => (
  <PageWrapper full title="Home" description="Mnenmonic Homepage">
    <HomeContainer />
  </PageWrapper>
);

export default HomePage;
