import React, { Children, cloneElement, isValidElement } from 'react';
import { classNames } from '../../utils/tailwind';
import Avatar, { IAvatarProps } from '../Avatar';
import Tooltip from '../Tooltip';

export type IAvatarGroupSpacing = 'sm' | 'md' | 'lg';

export const AvatarGroupSpacingClass: Record<IAvatarGroupSpacing, string> = {
  sm: '-space-x-3',
  md: '-space-x-2',
  lg: '-space-x-1',
} as const;

export type IAvatarGroupProps = {
  /**
   * The avatars to stack.
   */
  children: React.ReactNode;
  /**
   * Max avatars to show before +x.
   * @default 5
   */
  max?: number;
  /**
   * Custom classes for the root.
   */
  className?: string;
  /**
   * Tooltip text for the extra indicator.
   */
  extraTooltip?: string;
  /**
   * Props for the avatar elements.
   */
  avatarProps?: Pick<IAvatarProps, 'size' | 'className'>;
  /**
   * Spacing between avatars.
   */
  spacing?: IAvatarGroupSpacing;
};

function AvatarGroup({
  children: childrenProp,
  max = 5,
  className,
  extraTooltip,
  avatarProps,
  spacing = 'md',
}: IAvatarGroupProps): React.ReactElement {
  let clampedMax = max < 2 ? 2 : max;

  const children = Children.toArray(childrenProp).filter((child) =>
    isValidElement(child),
  );

  const totalAvatars = children.length;

  if (totalAvatars === clampedMax) {
    clampedMax += 1;
  }

  clampedMax = Math.min(totalAvatars + 1, clampedMax);

  const maxAvatars = Math.min(children.length, clampedMax - 1);
  const extraAvatars = Math.max(
    totalAvatars - clampedMax,
    totalAvatars - maxAvatars,
    0,
  );

  return (
    <div
      className={classNames(
        'flex',
        AvatarGroupSpacingClass[spacing],
        'overflow-hidden',
        className,
      )}
    >
      {children
        .slice(0, maxAvatars)
        .reverse()
        .map((child) =>
          cloneElement(child as React.ReactElement<any>, {
            size: avatarProps && avatarProps.size,
            className: classNames(
              'ring-2',
              'ring-white',
              avatarProps && avatarProps.className,
            ),
          }),
        )}
      {extraAvatars ? (
        <Tooltip text={extraTooltip} placement="top">
          <Avatar
            size={avatarProps && avatarProps.size}
            className={classNames(
              'ring-2',
              'ring-white',
              avatarProps && avatarProps.className,
            )}
          >{`+${extraAvatars.toString()}`}</Avatar>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default AvatarGroup;
