/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled, { css } from 'styled-components';
import { getContrast, darken, lighten } from 'polished';

import { BrandColor, StateColor, isBrandColor, isStateColor } from 'shared/types';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: BrandColor | StateColor;
  variant?: 'contained' | 'outlined' | 'base';
}

const outlined = (color: string) => css`
  background-color: transparent;
  color: ${color};
  border: 1px solid ${color};
  &:hover {
    box-shadow: 0px 4px 8px 0px ${lighten(0.3, color)};
  }
`;

const contained = (color: string) => css`
  ${(props) => `
  background-color: ${color};
  color: ${
    getContrast(color, props.theme.color.text.default) >= 4
      ? props.theme.color.text.default
      : props.theme.color.text.reverse
  };
  &:hover {
    background-color: ${darken(0.1, color)};
    box-shadow: 0px 4px 8px 0px ${lighten(0.3, color)};
  }
  `}
`;

const base = css`
  ${(props) => `
    padding: 0;
    background-color: transparent;
    color: ${props.theme.color.text.default}
  `}
`;

const Button = styled.button<ButtonProps>`
  cursor: pointer;
  outline: none;
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  font-family: ${(props) => props.theme.font.primary};
  transition: all 0.3s ease-in-out;

  ${(props) => {
    if (props.variant === 'base') return base;

    if (isBrandColor(props.color)) {
      if (props.variant === 'outlined') return outlined(props.theme.color.brand[props.color]);
      return contained(props.theme.color.brand[props.color]);
    }

    if (isStateColor(props.color)) {
      if (props.variant === 'outlined') return outlined(props.theme.color[props.color].default);
      return contained(props.theme.color[props.color].default);
    }

    if (props.variant === 'outlined') return outlined(props.theme.color.brand.primary);
    return contained(props.theme.color.brand.primary);
  }}
`;

export const S = { Button };
