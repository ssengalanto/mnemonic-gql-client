import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Components/Text',
  decorators: [withA11y, withKnobs],
};

export const Default: React.FC = () => <p>{text('Label', 'This is a sample text.')}</p>;
