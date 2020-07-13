import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

import { Presentation } from 'shared/storybook-ui';

import { Row, Text, Col } from '..';
import { Button } from './button.component';

export default {
  title: 'Components/Button',
  decorators: [withA11y, withKnobs],
  component: Button,
};

export const Default: React.FC = () => (
  <>
    <Presentation title="Buttons" description="Reusable button component." />

    <Row justify="space-between" direction="column" gutter={[20, 0]} style={{ width: '40%' }}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Contained Button
        </Text>
      </Col>
      <Col flex justify="space-between">
        <Button variant="contained" color="primary" onClick={action('button-click')}>
          <Text color="reverse">Primary</Text>
        </Button>
        <Button variant="contained" color="secondary" onClick={action('button-click')}>
          <Text color="reverse">Secondary</Text>
        </Button>
        <Button variant="contained" color="tertiary" onClick={action('button-click')}>
          <Text color="reverse">Tertiary</Text>
        </Button>
        <Button variant="contained" color="success" onClick={action('button-click')}>
          <Text color="reverse">Success</Text>
        </Button>
        <Button variant="contained" color="warn" onClick={action('button-click')}>
          <Text color="reverse">Warn</Text>
        </Button>
        <Button variant="contained" color="danger" onClick={action('button-click')}>
          <Text color="reverse">Danger</Text>
        </Button>
      </Col>
    </Row>

    <Row justify="space-between" direction="column" gutter={[20, 0]} style={{ width: '40%' }}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Outlined Button
        </Text>
      </Col>
      <Col span={24} flex justify="space-between">
        <Button variant="outlined" color="primary" onClick={action('button-click')}>
          Primary
        </Button>
        <Button variant="outlined" color="secondary" onClick={action('button-click')}>
          Secondary
        </Button>
        <Button variant="outlined" color="tertiary" onClick={action('button-click')}>
          Tertiary
        </Button>
        <Button variant="outlined" color="success" onClick={action('button-click')}>
          Success
        </Button>
        <Button variant="outlined" color="warn" onClick={action('button-click')}>
          Warn
        </Button>
        <Button variant="outlined" color="danger" onClick={action('button-click')}>
          Danger
        </Button>
      </Col>
    </Row>

    <Row justify="space-between" direction="column" gutter={[20, 0]} style={{ width: '30%' }}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Base Button
        </Text>
      </Col>
      <Col flex justify="space-between">
        <Button variant="base" onClick={action('button-click')}>
          Base Button
        </Button>
      </Col>
    </Row>
  </>
);
