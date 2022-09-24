export type IDisplayPriority = 'menu' | 'tooltip';

type IDisplayPriorityClasses = Record<IDisplayPriority, string>;

export const DisplayPriority: IDisplayPriorityClasses = {
  menu: 'z-10',
  tooltip: 'z-10',
} as const;
