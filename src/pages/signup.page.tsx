import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/layouts';
import { SignupContainer } from 'modules/auth/signup';

interface Props extends RouteComponentProps {}

const SigninPage: React.FC<Props> = () => (
  <PageWrapper title="Sign up" description="Sign up to Mnemonic">
    <SignupContainer />
  </PageWrapper>
);

export default SigninPage;
