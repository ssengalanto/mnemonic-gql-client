import 'assets/styles/main.scss';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { main } from 'assets/themes';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <div>hello</div>
  </ThemeProvider>
);
