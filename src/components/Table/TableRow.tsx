import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ITableRowProps = {
  children: React.ReactNode;
  selected?: boolean;
};

const TableRow = React.forwardRef<HTMLTableRowElement, ITableRowProps>(
  (props: ITableRowProps, ref) => {
    const { children, selected } = props;
    return (
      <tr
        ref={ref}
        className={classNames(
          'table-row',
          'align-middle',
          'outline-none',
          'hover:bg-gray-100',
          selected && 'bg-gray-200',
        )}
      >
        {children}
      </tr>
    );
  },
);

export default TableRow;
