import React from 'react';

import { Logo, MenuIcon } from 'shared/components';

import { S } from './header.styles';

interface Props {
  open: boolean;
  onClick: () => void;
}

export const Header: React.FC<Props> = ({ onClick, open }) => (
  <S.Header>
    <S.Row span={24} justify="space-between">
      <Logo>mnemonic</Logo>
      <S.Button variant="base" onClick={onClick} data-test-id="header-component:button">
        <MenuIcon isOpen={open} color="tertiary" />
      </S.Button>
    </S.Row>
  </S.Header>
);
