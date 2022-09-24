export const colors = {
  primary: 'bg-colors-base-gray-20',
  secondary: 'bg-colors-base-beige-40',
};

export type IColor = keyof typeof colors;

export const heightSizes = {
  '4': 'h-4',
  '8': 'h-8',
  '12': 'h-12',
  '16': 'h-16',
  '20': 'h-20',
  '24': 'h-24',
  '28': 'h-28',
  '32': 'h-32',
  '36': 'h-36',
  '40': 'h-40',
  full: 'h-full',
};

export const widthSizes = {
  '4': 'w-4',
  '8': 'w-8',
  '12': 'w-12',
  '16': 'w-16',
  '20': 'w-20',
  '24': 'w-24',
  '28': 'w-28',
  '32': 'w-32',
  '36': 'w-36',
  '40': 'w-40',
  full: 'w-full',
};

export type ISize = keyof typeof heightSizes;

export const variants = {
  circle: 'rounded-full',
  rounded: 'rounded-md',
  square: '',
} as const;

export type IVariant = keyof typeof variants;

export type IVariantClass = typeof variants[keyof typeof variants];
