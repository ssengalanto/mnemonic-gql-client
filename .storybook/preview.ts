import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
    showPanel: true,
    sortStoriesByKind: true,
    panelPosition: 'bottom',
  },
});
