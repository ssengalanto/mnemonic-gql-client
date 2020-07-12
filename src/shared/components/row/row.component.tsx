import React, { forwardRef } from 'react';

import { S, RowProps } from './row.styles';

export const Row = forwardRef((props: RowProps, ref: React.Ref<HTMLDivElement>) => (
  <S.Row ref={ref} {...props} />
));
