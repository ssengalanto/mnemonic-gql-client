import { useTransition } from 'react-spring';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useFadeTransition = (open: boolean) => {
  const transition = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return { transition };
};
