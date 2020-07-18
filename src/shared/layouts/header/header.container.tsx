import React from 'react';

import { useToggle } from 'shared/hooks';

import { Header } from './header.component';

export const HeaderContainer: React.FC = () => {
  const { open, handleToggle, handleEscKey, handleClose } = useToggle();

  const props = {
    open,
    handleToggle,
    handleEscKey,
    handleClose,
  };

  return <Header {...props} />;
};
