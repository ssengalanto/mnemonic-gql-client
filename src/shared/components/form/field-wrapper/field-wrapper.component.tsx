import React from 'react';
import { useTransition, animated } from 'react-spring';

import { S } from './field-wrapper.styles';

interface Props {
  error?: string;
  touched?: boolean;
  label?: string;
  value?: boolean;
}

const AnimatedLabel = animated(S.Label);

export const FieldWrapper: React.FC<Props> = ({ children, error, touched, label, value }) => {
  const transition = useTransition(value, {
    from: { opacity: 0, transform: 'translate(70px, 26px)' },
    enter: { opacity: 1, transform: 'translate(0px, 0px)' },
    leave: { opacity: 0 },
  });

  return (
    <S.Wrapper>
      {label &&
        value &&
        transition(
          (props, item) =>
            item && (
              <S.Container top>
                <AnimatedLabel
                  style={props}
                  density="bold"
                  color="wash"
                  data-test-id="field-wrapper:label"
                >
                  {label}
                </AnimatedLabel>
              </S.Container>
            ),
        )}
      {children}
      {error && touched && (
        <S.Container>
          <S.Error data-test-id="field-wrapper:error">{error}</S.Error>
        </S.Container>
      )}
    </S.Wrapper>
  );
};
