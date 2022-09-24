import React, { forwardRef, useEffect, useState } from 'react';
import { Colors } from './styles';
import { IColor } from './types';
import { ISize, Sizes } from '../../types/bubble';
import { classNames } from '../../utils/tailwind';

export type IAvatarProps = {
  /**
   * Used to render icon or text elements inside the Avatar if `src` is not set.
   * This can be an element, or just a string.
   */
  children?: React.ReactNode;
  /**
   * The size of the avatar.
   */
  size?: ISize;
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
   * The color applied to the text and background of the avatar
   * if no `img` is set.
   */
  color?: IColor;
  /**
   * If true, applies a white border around the avatar.
   */
  border?: boolean;
  /**
   * If true, applies a shadow behind the avatar.
   */
  shadow?: boolean;
  /**
   * Custom classes for the avatar root component.
   */
  className?: string;
};

type IAvatarRoot = {
  children: React.ReactNode;
} & Pick<IAvatarProps, 'size' | 'color' | 'border' | 'shadow' | 'className'>;

function getRandomColor(): IColor {
  const colorOptionsArr: IColor[] = Object.keys(Colors).map(Number) as IColor[];
  const randomIndex = Math.floor(Math.random() * colorOptionsArr.length);
  return colorOptionsArr[randomIndex];
}

function getColorFromAlt(alt: string): IColor {
  let charValue = 0;
  for (let i = 0; i < alt.length; i += 1) {
    charValue += alt.charCodeAt(i);
  }
  const val = (Math.abs(charValue % 10) + 1) as IColor;
  return val;
}

const AvatarRoot = forwardRef<HTMLDivElement, IAvatarRoot>(
  (
    { children, size = 'px40', color, border, shadow, className }: IAvatarRoot,
    ref,
  ) => (
    <div
      ref={ref}
      className={classNames(
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'shrink-0',
        Sizes[size],
        'rounded-full',
        'overflow-hidden',
        'select-none',
        color ? Colors[color] : 'bg-white',
        border
          ? 'border-border-width-base-0.7 border-colors-border-light-default'
          : '',
        shadow && 'shadow-box-shadow-medium-shadow',
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

const Avatar = forwardRef<any, IAvatarProps>((props: IAvatarProps, ref) => {
  const {
    src,
    alt,
    children: childrenProp,
    size,
    color: colorProp,
    border,
    shadow,
    className,
  } = props;

  let children = null;

  const [color, setColor] = useState<IColor | undefined>(undefined);

  useEffect(() => {
    if (src) {
      setColor(undefined);
    } else if (colorProp) {
      setColor(colorProp);
    } else if (alt) {
      setColor(getColorFromAlt(alt));
    } else {
      setColor(getRandomColor());
    }
  }, [colorProp, src, alt]);

  if (src) {
    children = <AvatarImg alt={alt} src={src} />;
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (alt) {
    // eslint-disable-next-line prefer-destructuring
    children = alt[0];
  } else {
    children = null;
  }

  return (
    <AvatarRoot
      ref={ref}
      size={size}
      color={color}
      border={border}
      shadow={shadow}
      className={className}
    >
      {children}
    </AvatarRoot>
  );
});

export { ISize as IAvatarSize };

export default Avatar;
