import React from 'react';
import { useNavigate } from '@reach/router';
import { useSpring, animated } from 'react-spring';

import { Button, Row, Col, Text } from 'shared/components';

import { S } from './signin.styles';
import { SigninForm } from './signin-form.component';

interface Props {
  navigate: ReturnType<typeof useNavigate>;
}

const formId = 'signin-form';
const AnimatedButton = animated(Button);

export const Signin: React.FC<Props> = ({ navigate }) => {
  const shake = useSpring({
    from: { opacity: 0, transform: 'translateX(30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 300 },
  });

  return (
    <S.Section>
      <Row direction="column" alignContent="space-between">
        <Col>
          <AnimatedButton style={shake} variant="base" onClick={() => navigate('/')}>
            <S.BackArrow />
          </AnimatedButton>
        </Col>
        <Col flex direction="column" justify="space-between">
          <Col>
            <S.Text color="primary" density="medium">
              Sign in
            </S.Text>
            <S.Text color="secondary" density="medium">
              to signin
            </S.Text>
          </Col>
          <Col>
            <SigninForm id={formId} />
          </Col>
          <Col flex direction="column" justify="flex-end" alignItems="center">
            <S.Button data-test-id="signin-component:signin-button" type="submit" form={formId}>
              <S.BtnText color="reverse">Sign in</S.BtnText>
            </S.Button>
            <Text>
              Don&lsquo;t have an account?{' '}
              <Button
                variant="base"
                onClick={() => navigate('/signup')}
                data-test-id="signin-component:signup-button"
              >
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
