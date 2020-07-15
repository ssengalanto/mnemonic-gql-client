import 'assets/styles/main.scss';

import React, { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from '@reach/router';

import { main } from 'assets/themes';
import { useToggle } from 'shared/hooks';
import { Header, Wrapper, Main } from 'shared/layouts';
import { RoutesContainer } from 'routes/routes.container';
import LoginPage from 'pages/login.page';

export const App: React.FC = () => {
  const { open, handleToggle } = useToggle();

  return (
    <ThemeProvider theme={main}>
      <Wrapper>
        <Router>
          <LoginPage path="/login" />
        </Router>
        <Header open={open} onClick={handleToggle} />
        <Main>
          <Suspense fallback={<div>loading...</div>}>
            <RoutesContainer />
          </Suspense>
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
};
