import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/components/page-wrapper';

interface Props extends RouteComponentProps {}

const LoginPage: React.FC<Props> = () => (
  <PageWrapper title="Login" description="Login to Mnemonic">
    <div>Login page</div>
  </PageWrapper>
);

export default LoginPage;
