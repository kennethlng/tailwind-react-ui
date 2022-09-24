import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ITableCellProps = {
  children: React.ReactNode;
  variant?: 'header' | 'body' | 'footer';
};

const TableCell = React.forwardRef<HTMLTableCellElement, ITableCellProps>(
  (props: ITableCellProps, ref) => {
    const { children, variant = 'body' } = props;
    return (
      <td
        ref={ref}
        className={classNames(
          'whitespace-nowrap',
          'table-cell',
          'text-left',
          'p-2',
          variant === 'header' && 'font-semibold',
        )}
      >
        {children}
      </td>
    );
  },
);

export default TableCell;
