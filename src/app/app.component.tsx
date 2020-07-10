import 'assets/styles/main.scss';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Button } from 'shared/components';

import { main } from 'assets/themes';

export const App: React.FC = () => (
  <ThemeProvider theme={main}>
    <Button variant="contained" color="primary">
      hello
    </Button>
    <Button variant="contained" color="secondary">
      hello
    </Button>
    <Button variant="contained" color="tertiary">
      hello
    </Button>
    <div style={{ paddingTop: 10 }}>
      <Button variant="outlined" color="primary">
        hello
      </Button>
      <Button variant="outlined" color="secondary">
        hello
      </Button>
      <Button variant="outlined" color="tertiary">
        hello
      </Button>
    </div>
  </ThemeProvider>
);
