import styled from 'styled-components';
import { Text as SharedText, Button as SharedButton } from 'shared/components';

const BtnText = styled(SharedText)`
  font-size: 1.8rem;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: 2rem;
  }
`;

const Button = styled(SharedButton)`
  width: 100%;
  max-width: 42.5rem;
  padding: 1rem;
  border-radius: 5rem;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 1.5rem;
  }
`;

export const S = { BtnText, Button };
