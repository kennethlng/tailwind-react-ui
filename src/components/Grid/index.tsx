import { classNames } from '../../utils/tailwind';
import {
  IColumns,
  IJustifyItems,
  IGap,
  IFlow,
  IRows,
  ColumnsClass,
  RowsClass,
  FlowClass,
  JustifyItemsClass,
  GapClass,
  GapXClass,
  GapYClass,
  XSBreakpointColumnsClass,
  SMBreakpointColumnsClass,
  MDBreakpointColumnsClass,
  LGBreakpointColumnsClass,
  XLBreakpointColumnsClass,
  XXLBreakpointColumnsClass,
} from '../../types/grid';
import GridItem from './Item';

export type IGridProps = {
  children: React.ReactNode;
  /**
   * Default number of columns
   */
  cols?: IColumns;
  /**
   * Number of rows when the direction is set to 'col'
   */
  rows?: IRows;
  /**
   * Number of columns for the 'xs' breakpoint
   */
  xs?: IColumns;
  /**
   * Number of columns for the 'sm' breakpoint
   */
  sm?: IColumns;
  /**
   * Number of columns for the 'md' breakpoint
   */
  md?: IColumns;
  /**
   * Number of columns for the 'lg' breakpoint
   */
  lg?: IColumns;
  /**
   * Number of columns for the 'xl' breakpoint
   */
  xl?: IColumns;
  /**
   * Number of columns for the 'xxl' breakpoint
   */
  xxl?: IColumns;
  /**
   * Row and column gutter size
   */
  gap?: IGap;
  /**
   * Row gutter size
   */
  gapX?: IGap;
  /**
   * Column gutter size
   */
  gapY?: IGap;
  /**
   * Alignment along the inline axis
   */
  justifyItems?: IJustifyItems;
  /**
   * Flow direction
   */
  direction?: IFlow;
  /**
   * The HTML element that the component should be rendered as.
   */
  as?: React.ElementType<any>;
  /**
   * Custom classes for the root component.
   */
  className?: string;
};

function Grid(props: IGridProps) {
  const {
    children,
    cols,
    rows,
    justifyItems = 'start',
    direction = 'row',
    gap = 0,
    gapX,
    gapY,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    as,
    className,
  } = props;

  const directionClass = FlowClass[direction];
  const justifyItemsClass = JustifyItemsClass[justifyItems];
  const gapClass = gap ? GapClass[gap] : '';
  const gapXClass = gapX ? GapXClass[gapX] : '';
  const gapYClass = gapY ? GapYClass[gapY] : '';
  const xsClass = xs ? XSBreakpointColumnsClass[xs] : '';
  const smClass = sm ? SMBreakpointColumnsClass[sm] : '';
  const mdClass = md ? MDBreakpointColumnsClass[md] : '';
  const lgClass = lg ? LGBreakpointColumnsClass[lg] : '';
  const xlClass = xl ? XLBreakpointColumnsClass[xl] : '';
  const xxlClass = xxl ? XXLBreakpointColumnsClass[xxl] : '';
  const Component = as || 'ul';

  return (
    <Component
      className={classNames(
        'grid',
        directionClass,
        cols && ColumnsClass[cols],
        rows && RowsClass[rows],
        gapClass,
        gapXClass,
        gapYClass,
        xsClass,
        smClass,
        mdClass,
        lgClass,
        xlClass,
        xxlClass,
        justifyItemsClass,
        className,
      )}
    >
      {children}
    </Component>
  );
}

Grid.Item = GridItem;

export default Grid;
