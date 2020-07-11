import React, { forwardRef } from 'react';

import { S, LogoProps } from './logo.styles';

export const Logo = forwardRef((props: LogoProps, ref: React.Ref<HTMLSpanElement>) => (
  <S.Logo ref={ref} {...props} />
));
