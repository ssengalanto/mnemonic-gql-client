import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/themes';
import { Routes, routes } from 'routes';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <Suspense fallback={<div>loading...</div>}>
      <Routes routes={routes} />
    </Suspense>
  </ThemeProvider>
);
