import * as React from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

export type IIconButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error';
type IColors = Record<IIconButtonColor, string>;
const Colors: IColors = {
  inherit: '',
  primary: 'text-colors-icon-primary-default',
  secondary: 'text-colors-icon-secondary-default',
  tertiary: 'text-colors-icon-tertiary-default',
  error: 'text-colors-semantic-error-dark',
};

export interface IIconButtonProps {
  color?: IIconButtonColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  label?: string;
  className?: string;
  fullWidth?: boolean;
  /**
   * Used to render icon or text elements inside the IconButton if `iconName` is not set.
   * This can be an element, or just a string.
   */
  children?: React.ReactNode;
}

const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  (props: IIconButtonProps, ref) => {
    const {
      onClick,
      disabled,
      label,
      color = 'primary',
      className,
      fullWidth,
      children,
    } = props;

    return (
      <button
        data-testid="icon-button"
        type="button"
        ref={ref}
        className={classNames(
          'flex',
          'flex-col',
          'items-center',
          Colors[color],
          'hover:bg-colors-background-brand-default',
          'p-spacing-base-4',
          'rounded-full',
          'disabled:opacity-opacity-disabled',
          fullWidth ? 'w-full' : '',
          className,
        )}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
        {label && (
          <Typography variant="captionMini" color="inherit">
            {label}
          </Typography>
        )}
      </button>
    );
  },
);

export default IconButton;
