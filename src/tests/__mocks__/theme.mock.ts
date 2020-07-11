import { DefaultTheme } from 'styled-components';

import { Fonts, Colors, Breakpoints, FontWeight } from 'shared/enums';

export const mockTheme: DefaultTheme = {
  color: {
    brand: {
      primary: Colors.VALENCIA,
      secondary: Colors.RHINO,
      tertiary: Colors.HAVELOCK_BLUE,
    },
    bg: {
      default: Colors.WHITE,
      reverse: Colors.BLACK_PEARL,
      wash: Colors.ATHENS_GRAY,
    },
    text: {
      default: Colors.MINE_SHAFT,
      reverse: Colors.WHITE,
      wash: Colors.CADET_BLUE,
    },
    success: {
      default: Colors.KEPPEL,
      wash: Colors.CLEAR_DAY,
    },
    warn: {
      default: Colors.AMBER,
      wash: Colors.SANDWISP,
    },
    danger: {
      default: Colors.CARNATION,
      wash: Colors.GERALDINE,
    },
  },
  font: {
    primary: Fonts.PRIMARY,
    secondary: Fonts.SECONDARY,
  },
  density: {
    thin: FontWeight.THIN,
    extraLight: FontWeight.EXTRA_LIGHT,
    light: FontWeight.LIGHT,
    regular: FontWeight.REGULAR,
    medium: FontWeight.MEDIUM,
    semiBold: FontWeight.SEMI_BOLD,
    bold: FontWeight.BOLD,
    extraBold: FontWeight.EXTRA_BOLD,
    heavy: FontWeight.HEAVY,
  },
  breakpoint: {
    xs: Breakpoints.XS,
    sm: Breakpoints.SM,
    md: Breakpoints.MD,
    lg: Breakpoints.LG,
    xl: Breakpoints.XL,
    xxl: Breakpoints.XXL,
  },
};
