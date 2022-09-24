import {
  IColor,
  IVariant,
  ISize,
  colors,
  heightSizes,
  widthSizes,
  variants,
} from '../types/placeholder';
import { classNames } from '../../../utils/tailwind';

export type IPlaceholderProps = {
  color?: IColor;
  height?: ISize;
  width?: ISize;
  variant?: IVariant;
};

function Placeholder({
  color = 'primary',
  height = '8',
  width = '32',
  variant = 'rounded',
}: IPlaceholderProps) {
  const heightClass = heightSizes[height];
  const widthClass = widthSizes[width];
  const variantClass = variants[variant];
  const backgroundColor = colors[color];

  return (
    <div
      className={classNames(
        'inline-flex',
        'items-center',
        'animate-pulse',
        backgroundColor,
        heightClass,
        widthClass,
        variantClass,
      )}
      data-testid="animation-placeholder"
    />
  );
}

export default Placeholder;
