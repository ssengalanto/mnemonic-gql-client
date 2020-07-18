import 'assets/styles/main.scss';

import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/themes';
import { useToggle } from 'shared/hooks';
import { Header, Wrapper } from 'shared/layouts';
import { Drawer } from 'shared/components';
import { Routes, initialRoutes, routes } from 'routes';

export const App: React.FC = () => {
  const { open, handleToggle, handleEscKey, handleClose } = useToggle();

  return (
    <ThemeProvider theme={main}>
      <Wrapper>
        <Suspense fallback={<div>loading...</div>}>
          <Routes routes={initialRoutes} authenticated />
        </Suspense>
        {/* <Header open={open} onClick={handleToggle} /> */}
        <Suspense fallback={<div>loading...</div>}>
          <Routes routes={routes} authenticated />
        </Suspense>
        <Drawer open={open} onClick={handleClose} onKeyDown={handleEscKey}>
          hello
        </Drawer>
      </Wrapper>
    </ThemeProvider>
  );
};
