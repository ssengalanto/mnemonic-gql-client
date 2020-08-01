import styled from 'styled-components';

import { Text as SharedText } from 'shared/components';

const Count = styled(SharedText)`
  font-size: 9rem;
  color: ${(props) => props.theme.color.brand.primary};

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 11rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: 14rem;
  }
`;

const Text = styled(SharedText)`
  font-size: 3.5rem;

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 4rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    font-size: 4.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    font-size: 6.5rem;
  }
`;

export const S = { Count, Text };
