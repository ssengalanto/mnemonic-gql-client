// constants
const brandColor = ['primary', 'secondary', 'tertiary'] as const;
const stateColor = ['success', 'warn', 'danger'] as const;
const textColor = ['default', 'reverse', 'wash'] as const;
const fontDensity = [
  'thin',
  'extra-light',
  'light',
  'regular',
  'medium',
  'semi-bold',
  'bold',
  'extra-bold',
  'heavy',
] as const;
const fontFamily = ['primary', 'secondary'] as const;

// types
export type BrandColor = typeof brandColor[number];
export type StateColor = typeof stateColor[number];
export type TextColor = typeof textColor[number];
export type FontDensity = typeof fontDensity[number];
export type FontFamily = typeof fontFamily[number];

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
