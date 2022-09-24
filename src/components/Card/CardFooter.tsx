import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ICardFooterProps = {
  children: React.ReactNode;
};

const CardFooter = React.forwardRef<HTMLDivElement, ICardFooterProps>(
  (props: ICardFooterProps, ref) => {
    const { children } = props;

    return (
      <div
        className={classNames('flex', 'items-center', 'p-4', 'gap-2')}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export default CardFooter;
