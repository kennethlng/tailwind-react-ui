export type IColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const ColumnsClass: Record<IColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
} as const;

export const XSBreakpointColumnsClass: Record<IColumns, string> = {
  1: 'xs:grid-cols-1',
  2: 'xs:grid-cols-2',
  3: 'xs:grid-cols-3',
  4: 'xs:grid-cols-4',
  5: 'xs:grid-cols-5',
  6: 'xs:grid-cols-6',
  7: 'xs:grid-cols-7',
  8: 'xs:grid-cols-8',
  9: 'xs:grid-cols-9',
  10: 'xs:grid-cols-10',
  11: 'xs:grid-cols-11',
  12: 'xs:grid-cols-12',
} as const;

export const SMBreakpointColumnsClass: Record<IColumns, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
  5: 'sm:grid-cols-5',
  6: 'sm:grid-cols-6',
  7: 'sm:grid-cols-7',
  8: 'sm:grid-cols-8',
  9: 'sm:grid-cols-9',
  10: 'sm:grid-cols-10',
  11: 'sm:grid-cols-11',
  12: 'sm:grid-cols-12',
} as const;

export const MDBreakpointColumnsClass: Record<IColumns, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  7: 'md:grid-cols-7',
  8: 'md:grid-cols-8',
  9: 'md:grid-cols-9',
  10: 'md:grid-cols-10',
  11: 'md:grid-cols-11',
  12: 'md:grid-cols-12',
} as const;

export const LGBreakpointColumnsClass: Record<IColumns, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
  6: 'lg:grid-cols-6',
  7: 'lg:grid-cols-7',
  8: 'lg:grid-cols-8',
  9: 'lg:grid-cols-9',
  10: 'lg:grid-cols-10',
  11: 'lg:grid-cols-11',
  12: 'lg:grid-cols-12',
} as const;

export const XLBreakpointColumnsClass: Record<IColumns, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
  5: 'xl:grid-cols-5',
  6: 'xl:grid-cols-6',
  7: 'xl:grid-cols-7',
  8: 'xl:grid-cols-8',
  9: 'xl:grid-cols-9',
  10: 'xl:grid-cols-10',
  11: 'xl:grid-cols-11',
  12: 'xl:grid-cols-12',
} as const;

export const XXLBreakpointColumnsClass: Record<IColumns, string> = {
  1: '2xl:grid-cols-1',
  2: '2xl:grid-cols-2',
  3: '2xl:grid-cols-3',
  4: '2xl:grid-cols-4',
  5: '2xl:grid-cols-5',
  6: '2xl:grid-cols-6',
  7: '2xl:grid-cols-7',
  8: '2xl:grid-cols-8',
  9: '2xl:grid-cols-9',
  10: '2xl:grid-cols-10',
  11: '2xl:grid-cols-11',
  12: '2xl:grid-cols-12',
} as const;

export type IRows = 1 | 2 | 3 | 4 | 5 | 6;

export const RowsClass: Record<IRows, string> = {
  1: 'grid-rows-1',
  2: 'grid-rows-2',
  3: 'grid-rows-3',
  4: 'grid-rows-4',
  5: 'grid-rows-5',
  6: 'grid-rows-6',
} as const;

export type IJustifyItems = 'start' | 'end' | 'center' | 'stretch';

export const JustifyItemsClass: Record<IJustifyItems, string> = {
  start: 'justify-items-start',
  end: 'justify-items-end',
  center: 'justify-items-center',
  stretch: 'justify-items-stretch',
} as const;

export type IGap =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 14
  | 16;

export const GapClass: Record<IGap, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  7: 'gap-7',
  8: 'gap-8',
  9: 'gap-9',
  10: 'gap-10',
  11: 'gap-11',
  12: 'gap-12',
  14: 'gap-14',
  16: 'gap-16',
} as const;

export const GapXClass: Record<IGap, string> = {
  0: 'gap-x-0',
  1: 'gap-x-1',
  2: 'gap-x-2',
  3: 'gap-x-3',
  4: 'gap-x-4',
  5: 'gap-x-5',
  6: 'gap-x-6',
  7: 'gap-x-7',
  8: 'gap-x-8',
  9: 'gap-x-9',
  10: 'gap-x-10',
  11: 'gap-x-11',
  12: 'gap-x-12',
  14: 'gap-x-14',
  16: 'gap-x-16',
} as const;

export const GapYClass: Record<IGap, string> = {
  0: 'gap-y-0',
  1: 'gap-y-1',
  2: 'gap-y-2',
  3: 'gap-y-3',
  4: 'gap-y-4',
  5: 'gap-y-5',
  6: 'gap-y-6',
  7: 'gap-y-7',
  8: 'gap-y-8',
  9: 'gap-y-9',
  10: 'gap-y-10',
  11: 'gap-y-11',
  12: 'gap-y-12',
  14: 'gap-y-14',
  16: 'gap-y-16',
} as const;

export type IFlow = 'row' | 'col';

export const FlowClass: Record<IFlow, string> = {
  row: 'grid-flow-row',
  col: 'grid-flow-col',
};

export type IColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'full';

export const ColSpanClass: Record<IColSpan, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6',
  7: 'col-span-7',
  8: 'col-span-8',
  9: 'col-span-9',
  10: 'col-span-10',
  11: 'col-span-11',
  12: 'col-span-12',
  full: 'col-span-full',
};

export type IRowSpan = 1 | 2 | 3 | 4 | 5 | 6 | 'full';

export const RowSpanClass: Record<IRowSpan, string> = {
  1: 'row-span-1',
  2: 'row-span-2',
  3: 'row-span-3',
  4: 'row-span-4',
  5: 'row-span-5',
  6: 'row-span-6',
  full: 'row-span-full',
};
