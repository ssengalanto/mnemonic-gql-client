/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { animated } from 'react-spring';

import { useFadeTransition } from 'shared/hooks';

import { S } from './backdrop.styles';

interface Props {
  open: boolean;
  onClick: () => void;
}

const AnimatedContainer = animated(S.Container);

export const Backdrop: React.FC<Props> = ({ open, onClick, children }) => {
  const { transition } = useFadeTransition(open);

  return transition(
    (props, item) =>
      item && (
        <AnimatedContainer style={props} data-test-id="backdrop-component">
          {children}
          <S.Overlay onClick={onClick} data-test-id="backdrop-component:overlay" />
        </AnimatedContainer>
      ),
  );
};
