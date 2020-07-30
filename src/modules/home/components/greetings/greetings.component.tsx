/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { animated, useSpring } from 'react-spring';

import { S } from './greetings.styles';

interface Props {
  count: number;
}

const AnimatedCount = animated(S.Count);

export const Greetings: React.FC<Props> = ({ count }) => {
  const spring = useSpring({ number: count, from: { number: 0 } });

  return (
    <>
      <AnimatedCount data-test-id="greetings-component:count">
        {spring.number.to((num) => Math.floor(num))}
      </AnimatedCount>
      <S.Text color="secondary" density="medium">
        reminders for
      </S.Text>
      <S.Text color="secondary" density="medium">
        today
      </S.Text>
    </>
  );
};
