import React, { forwardRef } from 'react';

import { S, ContainerProps } from './container.styles';

export const Container = forwardRef(
  (props: ContainerProps, ref: React.Ref<HTMLDivElement>): JSX.Element => (
    <S.Container ref={ref} {...props} />
  ),
);
