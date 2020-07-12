import React, { forwardRef } from 'react';
import { animated } from 'react-spring';

import { useFade } from 'shared/hooks';

import { S, WrapperProps } from './wrapper.styles';

const AnimatedWrapper = animated(S.Wrapper);

export const Wrapper = forwardRef((props: WrapperProps, ref: React.Ref<HTMLDivElement>) => {
  const { fade } = useFade();

  return <AnimatedWrapper style={fade} ref={ref} {...props} />;
});
