import '../src/assets/styles/main.scss';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

import { Wrapper } from './ui';
import { main } from '../src/assets/themes';

const Theme = (StoryFn) => (
  <ThemeProvider theme={main}>
    <Wrapper>
      <StoryFn />
    </Wrapper>
  </ThemeProvider>
);

addParameters({
  options: {
    theme: themes.dark,
    showPanel: true,
    sortStoriesByKind: true,
    panelPosition: 'bottom',
  },
});

addDecorator(Theme);
