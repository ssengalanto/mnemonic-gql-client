import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/layouts';
import { SigninContainer } from 'modules/auth/signin';

interface Props extends RouteComponentProps {}

const SigninPage: React.FC<Props> = () => (
  <PageWrapper title="Sign in" description="Sign in to Mnemonic">
    <SigninContainer />
  </PageWrapper>
);

export default SigninPage;
