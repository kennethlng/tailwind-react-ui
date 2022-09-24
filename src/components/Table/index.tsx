import React from 'react';
import { classNames } from '../../utils/tailwind';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

export type ITableProps = {
  children: React.ReactNode;
};

const TableBase = React.forwardRef<HTMLTableElement, ITableProps>(
  (props: ITableProps, ref) => {
    const { children } = props;
    return (
      <table
        ref={ref}
        className={classNames(
          'table',
          'min-w-full',
          'border-collapse',
          'border-spacing-0',
          'divide-y',
          'divide-gray-300',
        )}
      >
        {children}
      </table>
    );
  },
);

const Table = Object.assign(TableBase, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Cell: TableCell,
});

export default Table;
