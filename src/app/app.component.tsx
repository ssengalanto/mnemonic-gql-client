import 'assets/styles/main.scss';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Routes } from 'routes';
import { main } from 'assets/themes';
import { useToggle } from 'shared/hooks';
import { Header, Wrapper, Main, Container } from 'shared/layouts';

export const App: React.FC = () => {
  const { open, handleToggle } = useToggle();

  return (
    <ThemeProvider theme={main}>
      <Wrapper>
        <Header open={open} onClick={handleToggle} />
        <Main>
          <Container>
            <Routes />
          </Container>
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
};
