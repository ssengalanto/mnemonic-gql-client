import styled from 'styled-components';

export interface InputProps extends React.ComponentPropsWithoutRef<'input'> {}

const Input = styled.input`
  width: 100%;
  outline: 0;
  cursor: text;
  padding: 1rem 0;
  border: none;
  font-weight: 600;
  color: ${(props) => props.theme.color.text.default};
  font-family: ${(props) => props.theme.font.primary};
  border-bottom: 1px solid ${(props) => props.theme.color.text.wash};

  &:focus {
    color: ${(props) => props.theme.color.brand.tertiary};
    border-color: ${(props) => props.theme.color.brand.tertiary};
  }

  &::placeholder {
    font-weight: 500;
    color: ${(props) => props.theme.color.text.wash};
  }

  transition: all 0.3s ease-in-out;

  @media (min-width: ${(props) => props.theme.breakpoint.xl}) {
    font-size: 1.6rem;
  }
`;

export const S = { Input };
