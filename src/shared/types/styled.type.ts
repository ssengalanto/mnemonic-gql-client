// CONSTANTS
const brandColor = ['primary', 'secondary', 'tertiary'] as const;
const stateColor = ['success', 'warn', 'danger'] as const;
const textColor = ['default', 'reverse', 'wash'] as const;

/* THEME PROPS */
export type BrandColor = typeof brandColor[number];
export type StateColor = typeof stateColor[number];
export type TextColor = typeof textColor[number];
export type FontDensityProps =
  | 'thin'
  | 'extra-light'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semi-bold'
  | 'bold'
  | 'extra-bold'
  | 'heavy';
export type FontFamilyProps = 'primary' | 'secondary';
export type ButtonVariantProps = 'contained' | 'outlined' | 'base';

/* HTML ELEMENT PROPS */
export type FlexDirectionProps = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type FlexAlignment =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type JustifyContentProps = Exclude<FlexAlignment, 'stretch' | 'baseline'>;
export type AlignContentProps = Exclude<FlexAlignment, 'baseline' | 'space-evenly'>;
export type AlignItemsProps = Exclude<
  FlexAlignment,
  'space-between' | 'space-around' | 'space-evenly'
>;
export type AlignSelfProps =
  | 'auto'
  | Exclude<FlexAlignment, 'space-between' | 'space-around' | 'space-evenly'>;
export type FlexWrapProps = 'nowrap' | 'wrap' | 'wrap-reverse';
export type TextAlignProps = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export type DisplayProps = 'flex' | 'initial' | 'block' | 'inline';

// TYPE GUARDS
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
