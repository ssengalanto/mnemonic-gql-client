import styled, { css } from 'styled-components';
import {
  BrandColor,
  StateColor,
  TextColor,
  FontDensity,
  isBrandColor,
  isStateColor,
  isTextColor,
  FontFamily,
} from 'shared/types';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  noWrap?: boolean;
  gutterBottom?: boolean;
  color?: BrandColor | StateColor | TextColor;
  font?: FontFamily;
  density?: FontDensity;
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  display?: 'initial' | 'block' | 'inline';
}

const noWrap = css`
  white-space: nowrap;
`;

const gutterBottom = css`
  margin-bottom: 1rem;
`;

const Text = styled.p<TextProps>`
  display: ${(props) => props.display || 'initial'};
  text-align: ${(props) => props.align || 'inherit'};
  ${(props) => props.noWrap && noWrap};
  ${(props) => props.gutterBottom && gutterBottom};
  font-family: ${(props) => props.theme.font[props.font || 'primary']};
  font-weight: ${(props) => props.theme.density[props.density || 'regular']};

  color: ${(props) => {
    if (isBrandColor(props.color)) return props.theme.color.brand[props.color];

    if (isStateColor(props.color)) return props.theme.color[props.color].default;

    if (isTextColor(props.color)) return props.theme.color.text[props.color];

    return props.theme.color.text.default;
  }};
`;

export const S = { Text };
