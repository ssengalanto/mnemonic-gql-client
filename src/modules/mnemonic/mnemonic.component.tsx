import React from 'react';
import { useNavigate } from '@reach/router';
import { useSpring, animated } from 'react-spring';

import { Row, Col, Text, Button } from 'shared/components';

import { S } from './mnemonic.styles';

const AnimatedCircle = animated(S.Circle);

interface Props {
  navigate: ReturnType<typeof useNavigate>;
}

export const Mnemonic: React.FC<Props> = ({ navigate }) => {
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
              welcome to
            </S.Text>
            <S.Text color="secondary" density="medium">
              mnemonic
            </S.Text>
          </Col>
          <Col flex direction="column" justify="flex-end" alignItems="center">
            <S.Button onClick={() => navigate('/signin')} data-test-id='mnemonic-component:signin-button'>
              <S.BtnText color="reverse">Sign in</S.BtnText>
            </S.Button>
            <Text>
              Don&lsquo;t have an account?{' '}
              <Button variant="base" onClick={() => navigate('/signup')} data-test-id='mnemonic-component:signup-button'>
                <Text color="tertiary" density="semi-bold">
                  Sign up
                </Text>
              </Button>
            </Text>
          </Col>
        </Col>
      </Row>
    </S.Section>
  );
};
