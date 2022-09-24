export type IAlignSelf = 'start' | 'end' | 'center' | 'stretch' | 'baseline';

export const AlignSelfClass: { [P in IAlignSelf]: `self-${P}` } = {
  start: 'self-start',
  end: 'self-end',
  center: 'self-center',
  stretch: 'self-stretch',
  baseline: 'self-baseline',
} as const;
