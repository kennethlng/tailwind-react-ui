import React, { Children, cloneElement, isValidElement } from 'react';
import { classNames } from '../../utils/tailwind';
import Avatar, { IAvatarProps } from '../Avatar';
import Tooltip from '../Tooltip';

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
  avatarProps?: Pick<IAvatarProps, 'border' | 'size' | 'shadow' | 'className'>;
};

function AvatarGroup({
  children: childrenProp,
  max = 5,
  className,
  extraTooltip,
  avatarProps,
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
        'justify-start',
        'space-x-spacing-base-4',
        className,
      )}
    >
      {children
        .slice(0, maxAvatars)
        .reverse()
        .map((child) =>
          cloneElement(child as React.ReactElement<any>, {
            border: avatarProps && avatarProps.border,
            shadow: avatarProps && avatarProps.shadow,
            size: avatarProps && avatarProps.size,
            className: avatarProps && avatarProps.className,
          }),
        )}
      {extraAvatars ? (
        <Tooltip text={extraTooltip} placement="top">
          <Avatar
            color={1}
            border={avatarProps && avatarProps.border}
            shadow={avatarProps && avatarProps.shadow}
            size={avatarProps && avatarProps.size}
            className={avatarProps && avatarProps.className}
          >{`+${extraAvatars.toString()}`}</Avatar>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default AvatarGroup;
