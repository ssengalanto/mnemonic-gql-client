import 'assets/styles/main.scss';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/themes';
import { Header } from 'shared/layouts';
import { useToggle } from 'shared/hooks';

export const App: React.FC = () => {
  const { open, handleToggle } = useToggle();

  return (
    <ThemeProvider theme={main}>
      <Header open={open} onClick={handleToggle} />
    </ThemeProvider>
  );
};
