import React from 'react';

import { Row, Col, Text } from 'shared/components';

import { S } from './mnemonic.styles';

export const Mnemonic: React.FC = () => (
  <S.Section>
    <Row direction="column" alignContent="space-between">
      <Col>
        <S.Circle />
      </Col>
      <Col flex direction="column" justify="space-between">
        <Col>
          <S.Text color="primary" density="medium">
            Hello,
          </S.Text>
          <S.Text color="secondary" density="medium">
            Welcome to
          </S.Text>
          <S.Text color="secondary" density="medium">
            Mnemonic
          </S.Text>
        </Col>
        <Col flex direction="column" justify="flex-end" alignItems="center">
          <S.Button>
            <S.BtnText color="reverse">Login</S.BtnText>
          </S.Button>
          <Text >Don&lsquo;t have an account? Sign up</Text>
        </Col>
      </Col>
    </Row>
  </S.Section>
);
