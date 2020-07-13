import styled, { css } from 'styled-components';
import {
  BrandColor,
  StateColor,
  TextColor,
  FontDensityProps,
  isBrandColor,
  isStateColor,
  isTextColor,
  FontFamilyProps,
  TextAlignProps,
  DisplayProps,
} from 'shared/types';

export interface TextProps extends React.ComponentPropsWithoutRef<'p'> {
  noWrap?: boolean;
  gutterBottom?: boolean;
  color?: BrandColor | StateColor | TextColor;
  font?: FontFamilyProps;
  density?: FontDensityProps;
  align?: TextAlignProps;
  display?: Exclude<DisplayProps, 'flex'>;
}

const noWrap = css`
  white-space: nowrap;
`;

const gutterBottom = css`
  margin-bottom: 1rem;
`;

const Text = styled.p<TextProps>`
  font-size: 1.4rem;
  display: ${(props) => props.display || 'block'};
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
