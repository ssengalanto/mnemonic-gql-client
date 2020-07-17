import { useTransition } from 'react-spring';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDrawerTransition = (open: boolean) => {
  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transform: 'translateX(50vw)',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0)',
    },
    leave: {
      opacity: 0,
      transform: 'translateX(50vw)',
    },
  });
  return { transition };
};
