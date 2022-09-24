import * as React from 'react';
import { classNames } from '../../utils/tailwind';

export type IButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'inherit';
export type IButtonVariant = 'filled' | 'outlined' | 'text';
export type IButtonSize = 'small' | 'medium' | 'large';

export type IButtonProps = {
  /**
   * Button color
   */
  color?: IButtonColor;
  /**
   * Button variant
   */
  variant?: IButtonVariant;
  /**
   * Button width
   */
  fullWidth?: boolean;
  /**
   * Disabled flag
   */
  disabled?: boolean;
  /**
   * Click handler
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Children
   */
  children?: React.ReactNode;
  /**
   * The size of the button
   */
  size?: IButtonSize;
  /**
   * Start icon
   */
  startIcon?: React.ReactNode;
  /**
   * End icon
   */
  endIcon?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
};

/**
 * Primary UI component for user interaction
 */
const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (props: IButtonProps, ref) => {
    const {
      color = 'primary',
      variant = 'filled',
      fullWidth,
      disabled,
      onClick,
      children,
      size = 'medium',
      startIcon,
      endIcon,
      type,
    } = props;

    const renderChildren = () => {
      if (
        variant === 'filled' &&
        color === 'tertiary' &&
        (size === 'small' || size === 'medium')
      ) {
        return (
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF8763] to-[#9AA2CE]">
            {children}
          </span>
        );
      }

      return children;
    };

    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={ref}
        className={classNames(
          'inline-flex',
          'items-center',
          'justify-center',

          // Small size
          size === 'small' &&
            classNames(
              'text-font-size-button-mini',
              'font-font-weight-button-mini',
              'leading-line-height-button-mini',
              'tracking-letter-spacing-button-mini',
            ),

          // Medium size
          size === 'medium' &&
            classNames(
              'text-font-size-button',
              'font-font-weight-button',
              'leading-line-height-button',
              'tracking-letter-spacing-button',
            ),

          // Large size
          size === 'large' &&
            classNames(
              'text-font-size-button-large',
              'font-font-weight-button-large',
              'leading-line-height-button-large',
              'tracking-letter-spacing-button-large',
            ),

          // Filled variant
          variant === 'filled' &&
            classNames(
              'rounded-full',
              'shadow-box-shadow-medium-shadow',

              // Primary color
              color === 'primary' &&
                classNames(
                  'text-colors-button-primary-default-text',
                  'hover:text-colors-button-primary-hover-text',
                  'bg-colors-button-primary-default-background',
                  'hover:bg-colors-button-primary-hover-background',
                ),
              // Secondary color
              color === 'secondary' &&
                classNames(
                  'text-colors-button-secondary-default-text',
                  'hover:text-colors-button-secondary-hover-text',
                  'bg-colors-button-secondary-default-background',
                  'hover:bg-colors-button-secondary-hover-background',
                ),
              // Tertiary color
              color === 'tertiary' &&
                classNames(
                  'bg-colors-button-tertiary-default-background',
                  'hover:bg-colors-button-tertiary-hover-background',
                  'border',
                  'border-white',
                  size === 'large' &&
                    classNames(
                      'text-colors-button-tertiary-default-text',
                      'hover:text-colors-button-tertiary-hover-text',
                    ),
                ),

              // Small size
              size === 'small' &&
                classNames('px-spacing-base-8', 'py-spacing-base-4'),
              // Medium/large size
              size === 'medium' &&
                classNames('px-spacing-base-16', 'py-spacing-base-8'),
              size === 'large' &&
                classNames('px-spacing-base-16', 'py-spacing-base-8'),
            ),

          // Outlined variant
          variant === 'outlined' &&
            classNames(
              'px-spacing-base-8',
              'py-spacing-base-2',
              'rounded-border-radius-base-22',
              'border-border-width-base-1',
              // Primary color
              color === 'primary' &&
                classNames(
                  'text-colors-button-text-rounded-primary-default',
                  'hover:text-colors-button-text-rounded-primary-hover',
                  'active:text-colors-button-text-rounded-primary-active',
                  'bg-colors-button-background-rounded-primary-default',
                  'hover:bg-colors-button-background-rounded-primary-hover',
                  'active:bg-colors-button-background-rounded-primary-active',
                  'border-colors-button-border-rounded-primary-default',
                  'hover:border-colors-button-border-rounded-primary-hover',
                  'active:border-colors-button-border-rounded-primary-active',
                ),
              // Secondary color
              color === 'secondary' &&
                classNames(
                  'text-colors-button-text-rounded-secondary-default',
                  'hover:text-colors-button-text-rounded-secondary-hover',
                  'active:text-colors-button-text-rounded-secondary-active',
                  'bg-colors-button-background-rounded-secondary-default',
                  'hover:bg-colors-button-background-rounded-secondary-hover',
                  'active:bg-colors-button-background-rounded-secondary-active',
                  'border-colors-button-border-rounded-secondary-default',
                  'hover:border-colors-button-border-rounded-secondary-hover',
                  'active:border-colors-button-border-rounded-secondary-active',
                ),
            ),

          // Text variant
          variant === 'text' &&
            classNames(
              'bg-transparent',
              'border-0',
              'font-semibold',
              // Primary color
              color === 'primary' && 'text-colors-text-primary-default',
              // Secondary color
              color === 'secondary' && 'text-colors-text-secondary-default',
              // Tertiary color
              color === 'tertiary' && 'text-colors-text-tertiary-default',
              // Error color
              color === 'error' && 'text-colors-semantic-error-dark',
            ),

          // Width
          fullWidth ? 'w-full' : '',

          // Disabled
          disabled ? 'opacity-opacity-disabled' : '',
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {startIcon && <span className="mr-2">{startIcon}</span>}
        {renderChildren()}
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </button>
    );
  },
);

export default Button;
