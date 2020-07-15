import React, { forwardRef } from 'react';

import { S, MainProps } from './main.styles';

export const Main = forwardRef(
  (props: MainProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Main ref={ref} {...props} />
  ),
);
