import styled from 'styled-components';

import { Row as SharedRow, Text as SharedText } from 'shared/components';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

const Row = styled(SharedRow)`
  width: 100%;
  max-width: 114rem;
  padding: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 3rem;
  }
`;

const Text = styled(SharedText)`
  font-size: 1.2rem;
`;

export const S = { Footer, Row, Text };
