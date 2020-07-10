/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

import { getThemeColor } from 'shared/utils';
import { ColorProps } from 'shared/types';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: ColorProps;
  variant?: 'contained' | 'outlined' | 'base' | 'disabled';
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  outline: none;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  border: 2px solid transparent;
  font-family: ${(props) => props.theme.font.primary};
  background-color: ${(props) => getThemeColor(props.color)};
`;

export const S = { Button };
