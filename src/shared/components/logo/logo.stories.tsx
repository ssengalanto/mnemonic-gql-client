import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { Presentation } from 'shared/storybook-ui';

import { Row, Text, Col } from '..';
import { Logo as SLogo } from './logo.component';

export default {
  title: 'Components',
  decorators: [withA11y, withKnobs],
  component: SLogo,
};

export const Logo: React.FC = () => (
  <>
    <Presentation title="Logo" description="Mnemonic logo." />

    <Row justify="space-between" direction="column" gutter={[20, 0]}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Default Logo
        </Text>
      </Col>
      <Col>
        <SLogo>mnemonic</SLogo>
      </Col>
    </Row>

    <Row justify="space-between" direction="column" gutter={[20, 0]}>
      <Col>
        <Text gutterBottom density="semi-bold">
          Reversed Logo
        </Text>
      </Col>
      <Col>
        <Row gutter={[10, 20]} span={2} style={{ backgroundColor: '#111' }}>
          <SLogo variant="reverse">mnemonic</SLogo>
        </Row>
      </Col>
    </Row>
  </>
);
