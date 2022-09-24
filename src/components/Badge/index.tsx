import React from 'react';
import { classNames } from '../../utils/tailwind';

type IVerticalPosition = 'top' | 'bottom';
type IHorizontalPosition = 'right' | 'left';
export type IBadgePosition = {
  vertical: IVerticalPosition;
  horizontal: IHorizontalPosition;
};

const VerticalPositionClass: Record<IVerticalPosition, string> = {
  top: 'top-0',
  bottom: 'bottom-0',
};

const HorizontalPositionClass: Record<IHorizontalPosition, string> = {
  right: 'right-0',
  left: 'left-0',
};

export type IBadgeProps = {
  children: React.ReactNode;
  position?: IBadgePosition;
  content?: React.ReactNode;
  invisible?: boolean;
  badgeClassName?: string;
};

function Badge({
  children,
  content,
  position = {
    vertical: 'top',
    horizontal: 'right',
  },
  invisible = false,
  badgeClassName,
}: IBadgeProps) {
  return (
    <span className="block relative">
      {children}
      {content && (
        <span
          className={classNames(
            'absolute',
            invisible && 'invisible',
            VerticalPositionClass[position.vertical],
            HorizontalPositionClass[position.horizontal],
            badgeClassName,
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
}

export default Badge;
