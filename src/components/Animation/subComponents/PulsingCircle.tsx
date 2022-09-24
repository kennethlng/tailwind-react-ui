import { ISize, sizes, IColor, colors } from '../types/pulsingCircle';
import { classNames } from '../../../utils/tailwind';

export type ILoadingProps = {
  size?: ISize;
  color?: IColor;
};

function PulsingCircle({ size = 'md', color = 'primary' }: ILoadingProps) {
  const baseClassNames = classNames(
    'absolute',
    'rounded-border-radius-base-circle',
    'h-full',
    'w-full',
  );
  const colorClassNames = colors[color];
  return (
    <div
      className={classNames('flex', sizes[size])}
      data-testid="animation-pulsing-circle"
    >
      <div className="flex relative h-full w-full items-center justify-center">
        <div
          data-testid="animation-pulsing-circle-start"
          className={classNames(
            baseClassNames,
            colorClassNames.start,
            'animate-pulsing-circle-1',
          )}
        />
        <div
          data-testid="animation-pulsing-circle-mid"
          className={classNames(
            baseClassNames,
            colorClassNames.mid,
            'border-2',
            'animate-pulsing-circle-2',
          )}
        />
        <div
          data-testid="animation-pulsing-circle-end"
          className={classNames(
            baseClassNames,
            colorClassNames.end,
            'animate-pulsing-circle-3',
          )}
        />
      </div>
    </div>
  );
}

export default PulsingCircle;
