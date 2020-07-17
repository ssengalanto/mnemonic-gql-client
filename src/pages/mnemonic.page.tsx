import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Mnemonic } from 'modules/mnemonic';
import { PageWrapper } from 'shared/components/page-wrapper';

interface Props extends RouteComponentProps {}

const MnemonicPage: React.FC<Props> = () => (
  <PageWrapper title="Home" description="Welcome to Mnemonic">
    <Mnemonic />
  </PageWrapper>
);

export default MnemonicPage;
