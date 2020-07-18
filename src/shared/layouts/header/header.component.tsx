import React from 'react';

import { useToggle } from 'shared/hooks';
import { Logo, MenuIcon, Drawer } from 'shared/components';

import { S } from './header.styles';

type Props = Omit<ReturnType<typeof useToggle>, 'handleOpen'>;

export const Header: React.FC<Props> = ({ open, handleClose, handleEscKey, handleToggle }) => (
  <>
    <S.Header>
      <S.Row justify="space-between">
        <Logo>mnemonic</Logo>
        <S.Button variant="base" onClick={handleToggle} data-test-id="header-component:button">
          <MenuIcon isOpen={open} color="tertiary" />
        </S.Button>
      </S.Row>
    </S.Header>
    <Drawer open={open} onClick={handleClose} onKeyDown={handleEscKey}>
      hello
    </Drawer>
  </>
);
