import React from 'react';
import { useNavigate } from '@reach/router';

import { Mnemonic } from './mnemonic.component';

export const MnemonicContainer: React.FC = () => {
  const navigate = useNavigate();
  return <Mnemonic navigate={navigate} />;
};
