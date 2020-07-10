import React, { forwardRef } from 'react';

import { S, ButtonProps } from './button.styles';

export const Button = forwardRef(
  ({ type = 'button', ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
    <S.Button ref={ref} type={type} {...props} data-test-id="styled-button" />
  ),
);
