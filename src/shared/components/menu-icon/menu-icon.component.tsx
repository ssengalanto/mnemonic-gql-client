import React from 'react';

import { S, BurgerProps } from './menu-icon.styles';

export const MenuIcon: React.FC<BurgerProps> = ({ isOpen }) => (
  <S.Burger>
    <div
      data-test-id="burger-component"
      className={`burger burger-squeeze ${isOpen ? 'open' : ''}`}
    >
      <div className="burger-lines" />
    </div>
  </S.Burger>
);
