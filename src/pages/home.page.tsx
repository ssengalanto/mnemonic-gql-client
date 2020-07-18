import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/layouts';

interface Props extends RouteComponentProps {}

const HomePage: React.FC<Props> = () => (
  <PageWrapper full title="Home" description="Mnenmonic Homepage">
    <div>Home page</div>
  </PageWrapper>
);

export default HomePage;
