export type ISize = 'sm' | 'md' | 'lg';

export const sizes = {
  sm: 'h-16 w-16',
  md: 'h-32 w-32',
  lg: 'h-48 w-48',
} as const;

export const colors = {
  primary: {
    start: 'border-colors-base-beige-40',
    mid: 'border-colors-base-gray-20',
    end: 'border-colors-base-gray-20',
  },
  secondary: {
    start: 'border-colors-base-beige-25',
    mid: 'border-colors-base-beige-30',
    end: 'border-colors-base-beige-50',
  },
};

export type IColor = keyof typeof colors;
