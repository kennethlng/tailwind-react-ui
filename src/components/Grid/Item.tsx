import React, { forwardRef } from 'react';
import {
  ColSpanClass,
  IColSpan,
  IRowSpan,
  RowSpanClass,
} from '../../types/grid';
import { classNames } from '../../utils/tailwind';

export type IGridItem = {
  /**
   * The HTML element that the component should be rendered as.
   */
  as?: React.ElementType<any>;
  /**
   * Number of rows to span.
   */
  rowSpan?: IRowSpan;
  /**
   * Number of columns to span.
   */
  colSpan?: IColSpan;
  /**
   * Content of the component.
   */
  children: React.ReactNode;
  /**
   * Custom classes applied to the root.
   */
  className?: string;
};

const GridItem = forwardRef(
  ({ rowSpan, colSpan, children, className, as }: IGridItem, ref) => {
    const Component = as || 'li';

    return (
      <Component
        ref={ref}
        className={classNames(
          rowSpan && RowSpanClass[rowSpan],
          colSpan && ColSpanClass[colSpan],
          className,
        )}
      >
        {children}
      </Component>
    );
  },
);

export default GridItem;
