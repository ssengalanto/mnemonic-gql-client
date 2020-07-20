import styled from 'styled-components';

import { Section as SharedSection } from 'shared/layouts';
import { Text as SharedText, Button as SharedButton } from 'shared/components';
import { ReactComponent as BackArrowIcon } from 'assets/icons/back-arrow.svg';

const BackArrow = styled(BackArrowIcon)`
  height: 1.8rem;
  width: 1.8rem;
  fill: ${(props) => props.theme.color.text.wash};

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    height: 2rem;
    width: 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    height: 2.2rem;
    width: 2.2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

const Circle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: ${(props) => `4px solid ${props.theme.color.brand.primary}`};

  @media (min-width: ${(props) => props.theme.breakpoint.md}) {
    width: 4.5rem;
    height: 4.5rem;
    border: ${(props) => `5px solid ${props.theme.color.brand.primary}`};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    width: 5rem;
    height: 5rem;
    border: ${(props) => `6px solid ${props.theme.color.brand.primary}`};
  }
`;

const Section = styled(SharedSection)`
  height: 100vh;
  padding: 4rem;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 5rem;
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
  margin-bottom: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoint.lg}) {
    padding: 1.5rem;
  }
`;

export const S = { Circle, Section, Text, Button, BtnText, BackArrow };
