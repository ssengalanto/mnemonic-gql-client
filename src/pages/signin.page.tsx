import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/layouts';

interface Props extends RouteComponentProps {}

const LoginPage: React.FC<Props> = () => (
  <PageWrapper full title="Login" description="Login to Mnemonic">
    <div>Login page</div>
  </PageWrapper>
);

export default LoginPage;
