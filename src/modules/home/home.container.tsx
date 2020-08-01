import React from 'react';

import { Section } from 'shared/layouts';
import { Row, Col } from 'shared/components';

import { S } from './home.styles';
import { Greetings } from './components';

export const HomeContainer: React.FC = () => (
  <Section>
    <Row direction="column" justify="center">
      <Col flex direction="column" justify="flex-end">
        <Greetings count={12} />
      </Col>
      <Col flex direction="column" justify="center" alignItems="center">
        <S.Button variant="outlined">
          <S.BtnText color="primary">Check reminders</S.BtnText>
        </S.Button>
      </Col>
    </Row>
  </Section>
);
