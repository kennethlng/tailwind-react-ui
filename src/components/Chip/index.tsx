import React from 'react';
import { classNames } from '../../utils/tailwind';
import { IAvatarProps } from '../Avatar';

type IChipColor = 'primary' | 'error';

export type IChipProps = {
  avatar?: React.ReactElement<IAvatarProps>;
  icon?: React.ReactNode;
  label?: string;
  children?: string;
  secondaryActionIcon?: React.ReactNode;
  onSecondaryActionClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: IChipColor;
};

const ChipColor: Record<IChipColor, string> = {
  primary: classNames('bg-indigo-100', 'text-indigo-700'),
  error: classNames('bg-red-100', 'text-red-800'),
} as const;

const Chip = React.forwardRef<HTMLDivElement, IChipProps>(
  (props: IChipProps, ref) => {
    const {
      children,
      label,
      avatar: avatarProp,
      icon: iconProp,
      secondaryActionIcon: secondaryActionIconProp,
      onSecondaryActionClick,
      disabled,
      color = 'primary',
    } = props;

    let icon = null;
    if (iconProp && React.isValidElement(iconProp)) {
      icon = React.cloneElement(iconProp, {
        className: 'h-5 w-5',
      });
    }

    let avatar = null;
    if (avatarProp && React.isValidElement(avatarProp)) {
      avatar = React.cloneElement(avatarProp, {
        size: 'px20',
      });
    }

    let secondaryActionIcon = null;
    if (
      secondaryActionIconProp &&
      React.isValidElement(secondaryActionIconProp)
    ) {
      secondaryActionIcon = React.cloneElement(secondaryActionIconProp, {
        className: 'h-5 w-5',
      });
    }

    return (
      <div
        ref={ref}
        className={classNames(
          'max-w-full',
          'inline-flex',
          'text-sm',
          'font-medium',
          ChipColor[color],
          'items-center',
          'justify-center',
          'px-1.5',
          'py-1',
          'whitespace-nowrap',
          'rounded-full',
          'align-middle',
        )}
      >
        {avatar || icon}
        <span
          className={classNames(
            'overflow-hidden',
            'text-ellipsis',
            'px-1.5',
            'whitespace-nowrap',
          )}
        >
          {label || children}
        </span>
        {secondaryActionIcon && (
          <button
            type="button"
            className="disabled:opacity-opacity-disabled"
            onClick={onSecondaryActionClick}
            disabled={disabled}
          >
            {secondaryActionIcon}
          </button>
        )}
      </div>
    );
  },
);

export default Chip;
