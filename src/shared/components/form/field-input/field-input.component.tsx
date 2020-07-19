import React, { forwardRef } from 'react';

import { S, InputProps } from './filed-input.styles';

export const FieldInput = forwardRef((props: InputProps, ref: React.Ref<HTMLInputElement>) => (
  <S.Input ref={ref} {...props} />
));
