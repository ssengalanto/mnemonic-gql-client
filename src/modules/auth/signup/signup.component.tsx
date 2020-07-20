import React from 'react';
import { useNavigate } from '@reach/router';
import { useSpring, animated } from 'react-spring';

import { Button, Row, Col, Text } from 'shared/components';

import { S } from './signup.styles';
import { SignupFormContainer } from './form';

interface Props {
  navigate: ReturnType<typeof useNavigate>;
}

const formId = 'signup-form';
const AnimatedButton = animated(Button);

export const Signup: React.FC<Props> = ({ navigate }) => {
  const shake = useSpring({
    from: { opacity: 0, transform: 'translateX(30px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { duration: 300 },
  });

  return (
    <S.Section>
      <Row direction="column" alignContent="space-between">
        <Col>
          <AnimatedButton
            style={shake}
            variant="base"
            onClick={() => navigate(-1)}
            data-test-id="signup-component:back-button"
          >
            <S.BackArrow />
          </AnimatedButton>
        </Col>
        <Col flex direction="column" justify="space-between">
          <Col>
            <S.Text color="primary" density="medium">
              Sign up
            </S.Text>
            <S.Text color="secondary" density="medium">
              an account
            </S.Text>
          </Col>
          <Col>
            <SignupFormContainer id={formId} />
          </Col>
          <Col flex direction="column" justify="flex-end" alignItems="center">
            <S.Button data-test-id="signup-component:signup-button" type="submit" form={formId}>
              <S.BtnText color="reverse">Sign up</S.BtnText>
            </S.Button>
            <Text>
              Already have an account?{' '}
              <Button
                variant="base"
                onClick={() => navigate('/signin')}
                data-test-id="signup-component:signin-button"
              >
                <Text color="tertiary" density="semi-bold">
                  Sign in
                </Text>
              </Button>
            </Text>
          </Col>
        </Col>
      </Row>
    </S.Section>
  );
};
