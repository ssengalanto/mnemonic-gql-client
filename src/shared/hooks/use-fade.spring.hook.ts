/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useSpring } from 'react-spring';

export const useFadeSpring = () => {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return {
    fade,
  };
};
