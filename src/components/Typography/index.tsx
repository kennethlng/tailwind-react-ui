import React, { forwardRef } from 'react';
import {
  AlignClasses,
  IAlign,
  IWhitespace,
  WhitespaceClasses,
} from '../../types/typography';
import { classNames } from '../../utils/tailwind';
import { ColorClass, VariantClass } from './styles';
import { ITypographyColor, ITypographyVariant } from './types';

const DefaultTagMap: Partial<
  Record<ITypographyVariant, keyof JSX.IntrinsicElements>
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  body2: 'p',
  subtitle1: 'h6',
  subtitle2: 'h6',
  inherit: 'p',
} as const;

export type ITypographyProps = {
  /**
   * The text style to apply.
   */
  variant?: ITypographyVariant;
  /**
   * The content of the component.
   */
  children: React.ReactNode;
  /**
   * The HTML element that the component should be rendered as.
   */
  as?: React.ElementType<any>;
  /**
   * Option to bold the content.
   */
  bold?: boolean;
  /**
   * Color of the content.
   */
  color?: ITypographyColor;
  /**
   * Truncate overflowing text with an ellipsis.
   */
  truncate?: boolean;
  /**
   * Control the alignment of text.
   */
  align?: IAlign;
  /**
   * Control the white-space property.
   */
  whitespace?: IWhitespace;
  /**
   * Additional classes
   */
  className?: string;
  /**
   * Add opacity to match standard style of disabled button text.
   */
  disabled?: boolean;
};

const Typography = forwardRef<HTMLElement, ITypographyProps>(
  (props: ITypographyProps, ref) => {
    const {
      variant = 'body1',
      color = 'primary',
      children,
      as,
      bold,
      truncate,
      align,
      whitespace,
      className,
      disabled = false,
    } = props;
    const Component = as || DefaultTagMap[variant] || 'span';
    return (
      <Component
        ref={ref}
        className={classNames(
          'font-sans',
          VariantClass[variant],
          ColorClass[color],
          truncate ? 'truncate' : '',
          align ? AlignClasses[align] : '',
          whitespace ? WhitespaceClasses[whitespace] : '',
          className,
          disabled ? 'opacity-opacity-disabled' : '',
        )}
      >
        {children}
      </Component>
    );
  },
);

export { ITypographyColor, ITypographyVariant };

export default Typography;
