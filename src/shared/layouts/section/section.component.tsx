import React, { forwardRef } from 'react';

import { S, ContainerProps } from './section.styles';

export const Section = forwardRef(
  (props: ContainerProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Section ref={ref} {...props} />
  ),
);
