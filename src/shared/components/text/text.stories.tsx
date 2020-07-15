import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { Presentation } from 'shared/storybook-ui';
import { text, radios } from '@storybook/addon-knobs';

import { Row, Col } from '..';
import { Text as SText } from './text.component';

export default {
  title: 'Components',
  decorators: [withA11y],
  component: SText,
};

const colors = {
  primary: 'primary',
  secondary: 'secondary',
};

export const Text: React.FC = () => {
  const color = radios('Color', colors, 'primary');
  const label = text('Label', 'This is a sample paragraph.');
  console.log(color);
  return (
    <>
      <Presentation title="Text" description="Checkout the knobs to interact with the component." />

      <Row justify="space-between" direction="column" gutter={[20, 0]}>
        <Col>
          <SText gutterBottom density="semi-bold">
            Paragraph
          </SText>
        </Col>
        <Col>
          <SText color="default">{label}</SText>
        </Col>
      </Row>
    </>
  );
};
