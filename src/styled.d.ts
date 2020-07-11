import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      brand: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      bg: {
        default: string;
        reverse: string;
        wash: string;
      };
      text: {
        default: string;
        reverse: string;
        wash: string;
      };
      success: {
        default: string;
        wash: string;
      };
      warn: {
        default: string;
        wash: string;
      };
      danger: {
        default: string;
        wash: string;
      };
    };
    font: {
      primary: string;
      secondary: string;
    };
    density: {
      thin: number;
      ['extra-light']: number;
      light: number;
      regular: number;
      medium: number;
      ['semi-bold']: number;
      bold: number;
      ['extra-bold']: number;
      heavy: number;
    };
    breakpoint: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
