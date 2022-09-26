import { classNames } from '../../utils/tailwind';
import { ITypographyColor, ITypographyVariant } from './types';

export const VariantClass: Record<ITypographyVariant, string> = {
  inherit: '',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
  body1: 'text-body1',
  body2: 'text-body2',
  subtitle1: 'text-subtitle1',
  subtitle2: 'text-subtitle2',
  caption: 'text-caption',
  overline: classNames('text-overline', 'uppercase'),
} as const;

export const ColorClass: Record<ITypographyColor, string> = {
  inherit: '',
  textPrimary: 'text-text-primary',
  textSecondary: 'text-text-secondary',
  primary: 'text-primary',
  secondary: 'text-secondary',
  error: 'text-error',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
} as const;
