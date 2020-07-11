import React, { forwardRef } from 'react';

import { S, TextProps } from './text.styles';

export const Text = forwardRef((props: TextProps, ref: React.Ref<HTMLParagraphElement>) => (
  <S.Text ref={ref} {...props} />
));
