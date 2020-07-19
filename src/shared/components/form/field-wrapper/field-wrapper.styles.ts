import styled from 'styled-components';

import { Text as SharedText } from '../../text';

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const Container = styled.div<{ top?: boolean }>`
  top: ${(props) => (props.top ? '0.8rem' : '')};
  position: absolute;

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    top: ${(props) => (props.top ? '0.6rem' : '')};
  }
`;

const Error = styled(SharedText)`
  margin-top: 0.3rem;
  font-size: 1.1rem;
  color: ${(props) => props.theme.color.danger.default};

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    font-size: 1.4rem;
  }
`;

const Label = styled(SharedText)`
  font-size: 1.1rem;
  letter-spacing: 1px;

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    font-size: 1.4rem;
  }
`;

export const S = { Wrapper, Error, Label, Container };
