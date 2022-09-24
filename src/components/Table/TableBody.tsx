import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ITableBodyProps = {
  children: React.ReactNode;
};

const TableBody = React.forwardRef<HTMLTableSectionElement, ITableBodyProps>(
  (props: ITableBodyProps, ref) => {
    const { children } = props;
    return (
      <tbody
        ref={ref}
        className={classNames('table-row-group', 'divide-y', 'divide-gray-200')}
      >
        {children}
      </tbody>
    );
  },
);

export default TableBody;
