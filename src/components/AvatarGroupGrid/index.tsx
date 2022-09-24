import React, { Children, cloneElement, isValidElement } from 'react';
import { IColumns, IFlow, IGap, IJustifyItems, IRows } from '../../types/grid';
import Avatar, { IAvatarProps } from '../Avatar';
import Grid from '../Grid';
import Tooltip from '../Tooltip';

export type IAvatarGroupGridProps = {
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
   * Tooltip text for the extra avatar.
   */
  extraTooltip?: string;
  /**
   * Flow direction
   */
  direction?: IFlow;
  /**
   * Number of columns
   */
  cols?: IColumns;
  /**
   * Number of rows when the direction is set to 'col'
   */
  rows?: IRows;
  /**
   * Row and column gutter size
   */
  gap?: IGap;
  /**
   * Alignment along the inline axis
   */
  justifyItems?: IJustifyItems;
  /**
   * Props for the avatar elements.
   */
  avatarProps?: Pick<IAvatarProps, 'border' | 'size' | 'shadow' | 'className'>;
  /**
   * Custom classes for the root component.
   */
  className?: string;
};

function AvatarGroupGrid({
  children: childrenProp,
  max = 6,
  extraTooltip,
  cols,
  gap = 2,
  justifyItems,
  direction,
  rows,
  avatarProps,
  className,
}: IAvatarGroupGridProps): React.ReactElement {
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
    <Grid
      direction={direction}
      cols={cols}
      rows={rows}
      gap={gap}
      justifyItems={justifyItems}
      className={className}
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
    </Grid>
  );
}

export default AvatarGroupGrid;
