export type IAlign = 'left' | 'center' | 'right' | 'justify';
export type IWhitespace = 'normal' | 'nowrap';

export const AlignClasses: Record<IAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

export const WhitespaceClasses: Record<IWhitespace, string> = {
  normal: 'whitespace-normal',
  nowrap: 'whitespace-nowrap',
} as const;
