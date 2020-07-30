import styled from 'styled-components';

import { Row as SharedRow, Button as SharedButton } from 'shared/components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);

  @media (min-width: ${(props) => props.theme.breakpoint.xxl}) {
    box-shadow: none;
  }
`;

const Row = styled(SharedRow)`
  width: 100%;
  max-width: 114rem;
  padding: 1.5rem 2rem;
`;

const Button = styled(SharedButton)`
  z-index: 120;

  @media (min-width: ${(props) => props.theme.breakpoint.xxl}) {
    display: none;
  }
`;

export const S = { Header, Row, Button };
