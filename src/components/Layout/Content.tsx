import React from 'react';
import { classNames } from '../../utils/tailwind';

export type IContentProps = {
  children: React.ReactNode;
  className?: string;
};

const Content = React.forwardRef<HTMLDivElement, IContentProps>(
  (props: IContentProps, ref) => {
    const { children, className } = props;
    return (
      <div
        ref={ref}
        className={classNames(
          'flex',
          'flex-col',
          'flex-1',
          'overflow-y-auto',
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

export default Content;
