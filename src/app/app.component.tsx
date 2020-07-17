import 'assets/styles/main.scss';

import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';

import { main } from 'assets/themes';
import { useToggle } from 'shared/hooks';
import { Header, Wrapper } from 'shared/layouts';
import { Drawer } from 'shared/components';
import { RoutesContainer } from 'routes/routes.container';
import LoginPage from 'pages/login.page';

export const App: React.FC = () => {
  const { open, handleToggle, handleEscKey, handleClose } = useToggle();

  return (
    <ThemeProvider theme={main}>
      <Wrapper>
        <Router>
          <LoginPage path="/login" />
        </Router>
        <Header open={open} onClick={handleToggle} />
        {/* TODO: Loading Component */}
        <Suspense fallback={<div>loading...</div>}>
          <RoutesContainer />
        </Suspense>
        <Drawer open={open} onClick={handleClose} onKeyDown={handleEscKey}>
          hello
        </Drawer>
      </Wrapper>
    </ThemeProvider>
  );
};
