import React from 'react';

import { Logo, Button, MenuIcon, Row } from 'shared/components';

import { S } from './header.styles';
import { Container } from '../container';

interface Props {
  open: boolean;
  onClick: () => void;
}

export const Header: React.FC<Props> = ({ onClick, open }) => (
  <S.Header>
    <Container>
      <Row span={24} justify="space-between">
        <Logo>mnemonic</Logo>
        <Button variant="base" onClick={onClick} data-test-id="header-component:button">
          <MenuIcon isOpen={open} color="tertiary" />
        </Button>
      </Row>
    </Container>
  </S.Header>
);
