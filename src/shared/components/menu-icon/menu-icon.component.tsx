import React from 'react';

import { S, BurgerProps } from './menu-icon.styles';

export const MenuIcon: React.FC<BurgerProps> = ({ isOpen, ...props }) => (
  <S.Burger {...props}>
    <div
      className={`burger burger-squeeze ${isOpen ? 'open' : ''}`}
      data-test-id="burger-component"
    >
      <div className="burger-lines" />
    </div>
  </S.Burger>
);
