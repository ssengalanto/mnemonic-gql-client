import React from 'react';
import { animated } from 'react-spring';

import { S } from './drawer.styles';
import { Backdrop } from '../backdrop';
import { useDrawerTransition } from './use-drawer.transition.hook';

interface Props {
  open: boolean;
  onClick: () => void;
}

const AnimatedContainer = animated(S.Container);
export const Drawer: React.FC<Props> = ({ open, onClick, children }) => {
  const { transition } = useDrawerTransition(open);
  return (
    <Backdrop open={open} onClick={onClick} data-test-id="drawer-component:backdrop">
      {transition(
        (props, item) =>
          item && (
            <AnimatedContainer style={props} data-test-id="drawer-component">
              {children}
            </AnimatedContainer>
          ),
      )}
    </Backdrop>
  );
};
