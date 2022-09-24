import React from 'react';
import { classNames } from '../../utils/tailwind';

export type IPaperProps = {
  children: React.ReactNode;
  shadow?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

const Paper = React.forwardRef<HTMLDivElement, IPaperProps>(
  (props: IPaperProps, ref) => {
    const { children, shadow = true, className, style } = props;

    return (
      <div
        ref={ref}
        className={classNames(
          'bg-white',
          'rounded-lg',
          shadow && 'shadow',
          className,
        )}
        style={style}
      >
        {children}
      </div>
    );
  },
);

export default Paper;
