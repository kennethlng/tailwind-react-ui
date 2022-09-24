import React from 'react';

export type ITableFooterProps = {
  children: React.ReactNode;
};

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  ITableFooterProps
>((props: ITableFooterProps, ref) => {
  const { children } = props;
  return (
    <tfoot ref={ref} className="table-footer-group">
      {children}
    </tfoot>
  );
});

export default TableFooter;
