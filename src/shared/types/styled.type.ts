// constants
const brandColor = ['primary', 'secondary', 'tertiary'] as const;
const stateColor = ['success', 'warn', 'danger'] as const;
const textColor = ['default', 'reverse', 'wash'] as const;

// types
export type BrandColor = typeof brandColor[number];
export type StateColor = typeof stateColor[number];
export type TextColor = typeof textColor[number];

export type FontDensity =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'heavy';
export type FontFamily = 'primary' | 'secondary';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type JustifyContent = Exclude<FlexAlignment, 'stretch' | 'baseline'>;
export type AlignContent = Exclude<FlexAlignment, 'baseline' | 'space-evenly'>;
export type AlignItems = Exclude<FlexAlignment, 'space-between' | 'space-around' | 'space-evenly'>;
export type AlignSelf =
  | 'auto'
  | Exclude<FlexAlignment, 'space-between' | 'space-around' | 'space-evenly'>;
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

// type-guards
export const isBrandColor = (color?: string): color is BrandColor => {
  if (!color) return false;
  return (brandColor as readonly string[]).includes(color);
};

export const isStateColor = (color?: string): color is StateColor => {
  if (!color) return false;
  return (stateColor as readonly string[]).includes(color);
};

export const isTextColor = (color?: string): color is TextColor => {
  if (!color) return false;
  return (textColor as readonly string[]).includes(color);
};
