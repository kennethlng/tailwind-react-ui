import React from 'react';
import { IBreakpoint } from '../../types/breakpoint';
import { MaxWidthClass } from '../../types/sizing';
import { classNames } from '../../utils/tailwind';

export type IContainerProps = {
  children: React.ReactNode;
  maxWidth?: IBreakpoint;
};

const Container = React.forwardRef<HTMLDivElement, IContainerProps>(
  (props: IContainerProps, ref) => {
    const { children, maxWidth = 'xs' } = props;
    return (
      <div ref={ref} className={classNames('max-w-7xl', 'mx-auto')}>
        <div className={classNames(MaxWidthClass[maxWidth], 'mx-auto')}>
          {children}
        </div>
      </div>
    );
  },
);

export default Container;
