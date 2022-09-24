import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ICardContentProps = {
  children: React.ReactNode;
};

const CardContent = React.forwardRef<HTMLDivElement, ICardContentProps>(
  (props: ICardContentProps, ref) => {
    const { children } = props;

    return (
      <div className={classNames('p-4')} ref={ref}>
        {children}
      </div>
    );
  },
);

export default CardContent;
