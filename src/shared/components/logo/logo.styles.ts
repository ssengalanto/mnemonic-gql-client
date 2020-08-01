import styled from 'styled-components';

export interface LogoProps extends React.ComponentPropsWithoutRef<'span'> {
  variant?: 'default' | 'reverse';
}

const Logo = styled.span<LogoProps>`
  font-size: 2.5rem;
  font-family: ${(props) => props.theme.font.primary};
  font-weight: ${(props) => props.theme.density.medium};
  color: ${(props) =>
    props.variant === 'reverse' ? props.theme.color.text.reverse : props.theme.color.brand.primary};

  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    font-size: 3rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoint.xxl}) {
    font-size: 3.5rem;
  }
`;

export const S = { Logo };
