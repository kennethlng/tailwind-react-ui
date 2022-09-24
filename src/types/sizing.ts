/* eslint-disable import/prefer-default-export */
import { IBreakpoint } from './breakpoint';

export const MaxWidthClass: Record<IBreakpoint, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  xxl: 'max-w-2xl',
} as const;
