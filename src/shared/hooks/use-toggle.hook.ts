/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';

export const useToggle = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleToggle = (): void => {
    setOpen((x) => !x);
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle,
  };
};
