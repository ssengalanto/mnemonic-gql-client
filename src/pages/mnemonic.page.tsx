import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { MnemonicContainer } from 'modules/mnemonic';
import { PageWrapper } from 'shared/components/page-wrapper';

interface Props extends RouteComponentProps {}

const MnemonicPage: React.FC<Props> = () => (
  <PageWrapper title="Home" description="Welcome to Mnemonic">
    <MnemonicContainer />
  </PageWrapper>
);

export default MnemonicPage;
