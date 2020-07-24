import 'assets/styles/main.scss';

import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/themes';
import { Routes, initialRoutes, routes } from 'routes';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <Suspense fallback={<div>loading...</div>}>
      <Routes routes={initialRoutes} />
      <Routes routes={routes} />
    </Suspense>
  </ThemeProvider>
);
