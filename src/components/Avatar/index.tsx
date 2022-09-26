import React, { forwardRef } from 'react';
import { classNames } from '../../utils/tailwind';
import { AvatarSize } from './styles';
import { IAvatarSize } from './types';

export type IAvatarProps = {
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children?: React.ReactNode;
  /**
   * The size of the avatar.
   */
  size?: IAvatarSize;
  /**
   * Used in combination with `src` to provide an
   * alt attribute for the rendered `img` element.
   */
  alt?: string;
  /**
   * The `src` attribute for the `img` element.
   */
  src?: string;
  /**
   * Custom classes for the avatar root component.
   */
  className?: string;
};

type IAvatarRoot = {
  children: React.ReactNode;
} & Pick<IAvatarProps, 'size' | 'className'>;

const AvatarRoot = forwardRef<HTMLDivElement, IAvatarRoot>(
  ({ children, size = 'md', className }: IAvatarRoot, ref) => (
    <div
      ref={ref}
      className={classNames(
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'shrink-0',
        AvatarSize[size],
        'rounded-full',
        'overflow-hidden',
        'select-none',
        'bg-gray-200',
        className,
      )}
    >
      {children}
    </div>
  ),
);

type IAvatarImg = {
  src?: string;
  alt?: string;
};

function AvatarImg({ alt, src }: IAvatarImg) {
  return (
    <img
      className={classNames(
        'w-full',
        'h-full',
        'text-center',
        'object-cover',
        'text-transparent',
      )}
      referrerPolicy="no-referrer"
      src={src}
      alt={alt}
    />
  );
}

const Avatar = forwardRef<HTMLDivElement, IAvatarProps>(
  (props: IAvatarProps, ref) => {
    const { src, alt, children: childrenProp, size, className } = props;

    let children = null;

    if (src) {
      children = <AvatarImg alt={alt} src={src} />;
    } else if (childrenProp != null) {
      children = childrenProp;
    } else if (alt) {
      children = alt[0];
    } else {
      children = null;
    }

    return (
      <AvatarRoot ref={ref} size={size} className={className}>
        {children}
      </AvatarRoot>
    );
  },
);

export { IAvatarSize };

export default Avatar;
