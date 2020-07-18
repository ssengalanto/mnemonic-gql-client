import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { PageWrapper } from 'shared/layouts';
import { MnemonicContainer } from 'modules/mnemonic';

interface Props extends RouteComponentProps {}

const MnemonicPage: React.FC<Props> = () => (
  <PageWrapper title="Welcome" description="Welcome to Mnemonic">
    <MnemonicContainer />
  </PageWrapper>
);

export default MnemonicPage;
