/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { css } from 'styled-components';
import { ColorProps, isBrandColor, isStateColor } from 'shared/types';

export const getThemeColor = (color?: ColorProps) => css`
  ${(props) => {
    if (isBrandColor(color)) return props.theme.color.brand[color];

    if (isStateColor(color)) return props.theme.color[color].default;

    return props.theme.color.brand.primary;
  }}
`;
