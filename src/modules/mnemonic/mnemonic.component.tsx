import React from 'react';
import { useSpring, animated } from 'react-spring';

import { Row, Col, Text } from 'shared/components';

import { S } from './mnemonic.styles';

const AnimatedCircle = animated(S.Circle);

export const Mnemonic: React.FC = () => {
  const bounce = useSpring({
    from: { opacity: 0, transform: 'translateY(-200px)' },
    to: [
      { opacity: 0.8, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0px)' },
    ],
  });
  
  return (
    <S.Section>
      <Row direction="column" alignContent="space-between">
        <Col>
          <AnimatedCircle style={bounce} />
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
            <Text>Don&lsquo;t have an account? Sign up</Text>
          </Col>
        </Col>
      </Row>
    </S.Section>
  );
};
