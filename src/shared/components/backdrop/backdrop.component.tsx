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

export const Backdrop = ({ open, onClick, children }: React.PropsWithChildren<Props>) => {
  const { transitions } = useFadeTransition(open);

  return transitions(
    (props, item) =>
      item && (
        <AnimatedContainer style={props} data-test-id="backdrop-component">
          {children}
          <S.Overlay onClick={onClick} aria-hidden />
        </AnimatedContainer>
      ),
  );
};
