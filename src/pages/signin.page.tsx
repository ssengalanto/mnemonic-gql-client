import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/layouts';
import { SigninContainer } from 'modules/auth/signin';

interface Props extends RouteComponentProps {}

const SigninPage: React.FC<Props> = () => (
  <PageWrapper title="Signin" description="Signin to Mnemonic">
    <SigninContainer />
  </PageWrapper>
);

export default SigninPage;
