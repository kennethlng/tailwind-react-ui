import { ISize, IVariant } from '../types/progressCircle';
import { classNames } from '../../../utils/tailwind';
// import Icon from '../../Icon';

export const circleSizes = {
  sm: 'h-12 w-12',
  md: 'h-20 w-20',
  lg: 'h-40 w-40',
} as const;

export const checkSizes = {
  sm: 'px32',
  md: 'px56',
  lg: 'px112',
} as const;

export const animationVariantMap = {
  base: {
    determinate: 'animate-progress-circle-determinate',
    indeterminate: 'animate-progress-circle-indeterminate',
  },
  layer1: {
    determinate: 'animate-progress-circle-layer-1-determinate',
    indeterminate: 'animate-progress-circle-layer-1-indeterminate',
  },
  layer2: {
    determinate: 'animate-progress-circle-layer-2-determinate',
    indeterminate: 'animate-progress-circle-layer-2-indeterminate',
  },
  layer3: {
    determinate: 'animate-progress-circle-layer-3-determinate',
    indeterminate: 'animate-progress-circle-layer-3-indeterminate',
  },
} as const;

export type IProgressCircleProps = {
  size?: ISize;
  variant?: IVariant;
};

function ProgressCircle({
  size = 'md',
  variant = 'determinate',
}: IProgressCircleProps) {
  const fullCircleClass =
    'absolute rounded-full flex-col h-full w-full invisible opacity-0';
  const topHalfCircleClass = 'rounded-t-full w-full h-1/2';
  const bottomHalfCircleClass = 'rounded-b-full w-full h-1/2';

  return (
    <div
      className={classNames('flex', circleSizes[size])}
      data-testid="animation-progress-circle"
    >
      <div className="flex relative h-full w-full items-center justify-center">
        <div
          className={classNames(
            'absolute',
            'rounded-full',
            'h-full',
            'w-full',
            'bg-colors-base-orange-90',
            animationVariantMap.base[variant],
          )}
        />
        <div
          className={classNames(
            fullCircleClass,
            animationVariantMap.layer1[variant],
          )}
        >
          <div className={classNames(topHalfCircleClass, 'bg-transparent')} />
          <div className={classNames(bottomHalfCircleClass, 'bg-white')} />
        </div>
        <div
          className={classNames(
            fullCircleClass,
            animationVariantMap.layer2[variant],
          )}
        >
          <div
            className={classNames(topHalfCircleClass, 'bg-colors-base-gray-20')}
          />
          <div
            className={classNames(bottomHalfCircleClass, 'bg-transparent')}
          />
        </div>
        <div
          className={classNames(
            fullCircleClass,
            animationVariantMap.layer3[variant],
          )}
        >
          <div className={classNames(topHalfCircleClass, 'bg-white')} />
          <div
            className={classNames(bottomHalfCircleClass, 'bg-transparent')}
          />
        </div>
        <div
          className={classNames(
            'absolute',
            'rounded-full',
            'h-5/6',
            'w-5/6',
            'bg-white',
          )}
        />
        {variant === 'determinate' && (
          <div
            className={classNames(
              'absolute',
              'z-50',
              'items-center',
              'justify-center',
            )}
          >
            <span className="text-colors-base-orange-90 animate-progress-circle-check-mark">
              {/* <Icon
                iconName="CheckActiveIcon"
                size={checkSizes[size]}
                color="inherit"
              /> */}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressCircle;
