import { classNames } from '../../utils/tailwind';
import { ITypographyColor, ITypographyVariant } from './types';

export const VariantClasses: Record<ITypographyVariant, string> = {
  inherit: '',
  h5: classNames(
    'text-font-size-title-h-5',
    'leading-line-height-title-h-5',
    'tracking-letter-spacing-title-h-5',
  ),
  body1: classNames(
    'text-font-size-body-1',
    'leading-line-height-body-1',
    'tracking-letter-spacing-body-1',
  ),
  body2: classNames(
    'text-font-size-body-2',
    'leading-line-height-body-2',
    'tracking-letter-spacing-body-2',
  ),
  body3: classNames(
    'text-font-size-body-3',
    'leading-line-height-body-3',
    'tracking-letter-spacing-body-3',
  ),
  subtitle: classNames(
    'text-font-size-subtitle',
    'leading-line-height-subtitle',
    'tracking-letter-spacing-subtitle',
  ),
  caption: classNames(
    'text-font-size-caption',
    'leading-line-height-caption',
    'tracking-letter-spacing-caption',
  ),
  captionMini: classNames(
    'text-font-size-caption-mini',
    'leading-line-height-caption-mini',
    'tracking-letter-spacing-caption-mini',
  ),
  overline: classNames(
    'text-font-size-overline',
    'leading-line-height-overline',
    'tracking-letter-spacing-overline',
    'uppercase',
  ),
} as const;

export const ColorClasses: Record<ITypographyColor, string> = {
  inherit: '',
  primary: 'text-colors-text-primary-default',
  secondary: 'text-colors-text-secondary-default',
  tertiary: 'text-colors-text-tertiary-default',
  error: 'text-colors-semantic-error-dark',
  info: 'text-colors-semantic-info-dark',
  success: 'text-colors-semantic-success-dark',
  warning: 'text-colors-semantic-warning-dark',
} as const;

const regularFontWeightClasses: Record<ITypographyVariant, string> = {
  inherit: '',
  h5: 'font-font-weight-title-h-5',
  body1: 'font-font-weight-body-1',
  body2: 'font-font-weight-body-2',
  body3: 'font-font-weight-body-3',
  subtitle: 'font-font-weight-subtitle',
  caption: 'font-font-weight-caption',
  captionMini: 'font-font-weight-caption-mini',
  overline: 'font-font-weight-overline',
} as const;

const boldFontWeightClasses: Partial<Record<ITypographyVariant, string>> = {
  body1: 'font-font-weight-body-1-bold',
  body2: 'font-font-weight-body-2-bold',
  body3: 'font-font-weight-body-3-bold',
  subtitle: 'font-font-weight-subtitle-bold',
} as const;

export const FontWeightVariant = (
  variant: ITypographyVariant,
  bold: boolean | undefined,
): string => {
  if (bold) {
    return boldFontWeightClasses[variant] ?? regularFontWeightClasses[variant];
  }
  return regularFontWeightClasses[variant];
};
