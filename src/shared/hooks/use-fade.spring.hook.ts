/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSpring } from 'react-spring';

export const useFadeSpring = () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return {
    fade,
  };
};
