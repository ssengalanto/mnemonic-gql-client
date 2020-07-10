// constants
export const brandColor = ['primary', 'secondary', 'tertiary'] as const;
export const stateColor = ['success', 'warn', 'danger'] as const;
export const textColor = ['default', 'reverse', 'wash'] as const;

// types
export type BrandColor = typeof brandColor[number];
export type StateColor = typeof stateColor[number];
export type TextColor = typeof textColor[number];
export type ColorProps = BrandColor | StateColor;

// type-guards
export const isBrandColor = (color?: ColorProps): color is BrandColor => {
  if (!color) return false;
  return (brandColor as readonly string[]).includes(color);
};

export const isStateColor = (color?: ColorProps): color is StateColor => {
  if (!color) return false;
  return (stateColor as readonly string[]).includes(color);
};
