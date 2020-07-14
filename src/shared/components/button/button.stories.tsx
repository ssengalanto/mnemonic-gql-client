import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Presentation } from 'shared/storybook-ui';

import { Row, Text, Col } from '..';
import { Button as SButton } from './button.component';

export default {
  title: 'Components',
  decorators: [withA11y, withKnobs],
  component: SButton,
};

export const Button: React.FC = () => (
  <>
    <Presentation title="Buttons" description="Reusable button component." />

    <Row justify="space-between" direction="column" gutter={[20, 0]} span={10}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Contained Button
        </Text>
      </Col>
      <Col flex justify="space-between">
        <SButton variant="contained" color="primary" onClick={action('button-click')}>
          <Text color="reverse">Primary</Text>
        </SButton>
        <SButton variant="contained" color="secondary" onClick={action('button-click')}>
          <Text color="reverse">Secondary</Text>
        </SButton>
        <SButton variant="contained" color="tertiary" onClick={action('button-click')}>
          <Text color="reverse">Tertiary</Text>
        </SButton>
        <SButton variant="contained" color="success" onClick={action('button-click')}>
          <Text color="reverse">Success</Text>
        </SButton>
        <SButton variant="contained" color="warn" onClick={action('button-click')}>
          <Text color="reverse">Warn</Text>
        </SButton>
        <SButton variant="contained" color="danger" onClick={action('button-click')}>
          <Text color="reverse">Danger</Text>
        </SButton>
      </Col>
    </Row>

    <Row justify="space-between" direction="column" gutter={[20, 0]} span={10}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Outlined Button
        </Text>
      </Col>
      <Col span={24} flex justify="space-between">
        <SButton variant="outlined" color="primary" onClick={action('button-click')}>
          Primary
        </SButton>
        <SButton variant="outlined" color="secondary" onClick={action('button-click')}>
          Secondary
        </SButton>
        <SButton variant="outlined" color="tertiary" onClick={action('button-click')}>
          Tertiary
        </SButton>
        <SButton variant="outlined" color="success" onClick={action('button-click')}>
          Success
        </SButton>
        <SButton variant="outlined" color="warn" onClick={action('button-click')}>
          Warn
        </SButton>
        <SButton variant="outlined" color="danger" onClick={action('button-click')}>
          Danger
        </SButton>
      </Col>
    </Row>

    <Row justify="space-between" direction="column" gutter={[20, 0]} span={10}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Base Button
        </Text>
      </Col>
      <Col flex justify="space-between">
        <SButton variant="base" onClick={action('button-click')}>
          Base Button
        </SButton>
      </Col>
    </Row>
  </>
);
