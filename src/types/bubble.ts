export type IVariant = 'circle' | 'rounded';

export const Sizes = {
  px12: 'h-spacing-base-12 w-spacing-base-12',
  px16: 'h-spacing-base-16 w-spacing-base-16',
  px18: 'h-spacing-base-18 w-spacing-base-18',
  px20: 'h-spacing-base-20 w-spacing-base-20',
  px24: 'h-spacing-base-24 w-spacing-base-24',
  px28: 'h-spacing-base-28 w-spacing-base-28',
  px32: 'h-spacing-base-32 w-spacing-base-32',
  px36: 'h-spacing-base-36 w-spacing-base-36',
  px40: 'h-spacing-base-40 w-spacing-base-40',
  px48: 'h-spacing-base-48 w-spacing-base-48',
  px56: 'h-spacing-base-56 w-spacing-base-56',
  px64: 'h-spacing-base-64 w-spacing-base-64',
  px80: 'h-spacing-base-80 w-spacing-base-80',
  px88: 'h-spacing-base-88 w-spacing-base-88',
  px96: 'h-spacing-base-96 w-spacing-base-96',
  px112: 'h-spacing-base-112 w-spacing-base-112',
  px128: 'h-spacing-base-128 w-spacing-base-128',
  px160: 'h-spacing-base-160 w-spacing-base-160',
} as const;

export type ISize = keyof typeof Sizes;

export const Variants = {
  circle: 'rounded-border-radius-base-circle',
  rounded: 'rounded-md',
} as const;

export type ISizeClass = typeof Sizes[keyof typeof Sizes];
export type IVariantClass = typeof Variants[keyof typeof Variants];
