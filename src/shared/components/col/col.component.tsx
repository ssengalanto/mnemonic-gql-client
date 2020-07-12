import React, { forwardRef } from 'react';

import { S, ColProps } from './col.styles';

export const Col = forwardRef((props: ColProps, ref: React.Ref<HTMLDivElement>) => (
  <S.Col ref={ref} {...props} />
));
