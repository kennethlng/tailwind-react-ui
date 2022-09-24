import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ITableHeadProps = {
  children: React.ReactNode;
};

const TableHeader = React.forwardRef<HTMLTableSectionElement, ITableHeadProps>(
  (props: ITableHeadProps, ref) => {
    const { children } = props;
    return (
      <thead
        ref={ref}
        className={classNames('table-header-group', 'bg-gray-50')}
      >
        {children}
      </thead>
    );
  },
);

export default TableHeader;
