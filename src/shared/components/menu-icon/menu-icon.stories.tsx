import React from 'react';
import { withA11y } from '@storybook/addon-a11y';

import { useToggle } from 'shared/hooks';
import { Presentation } from 'shared/storybook-ui';

import { Row, Col, Text } from '..';
import { MenuIcon as SMenuIcon } from './menu-icon.component';
import { Button } from '../button';

export default {
  title: 'Components',
  decorators: [withA11y],
  component: SMenuIcon,
};

export const MenuIcon: React.FC = () => {
  const { open, handleToggle } = useToggle();

  return (
    <>
      <Presentation title="Menu Icon" description="Click on the button to interact" />

      <Row justify="space-between" direction="column" gutter={[20, 0]}>
        <Col>
          <Text gutterBottom density="semi-bold">
            Burger Icon
          </Text>
        </Col>
        <Col>
          <Button variant="base" onClick={handleToggle}>
            <SMenuIcon isOpen={open} color="default" />
          </Button>
        </Col>
      </Row>
    </>
  );
};
