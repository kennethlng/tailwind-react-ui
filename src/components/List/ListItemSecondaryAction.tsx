import React from 'react';
import { classNames } from '../../utils/tailwind';

export type IListItemSecondaryActionProps = {
  children: React.ReactNode;
  disableGutters?: boolean;
};

const ListItemSecondaryAction = React.forwardRef<
  HTMLDivElement,
  IListItemSecondaryActionProps
>((props: IListItemSecondaryActionProps, ref) => {
  const { children, disableGutters } = props;

  return (
    <div
      ref={ref}
      className={classNames(
        'absolute',
        'top-1/2',
        disableGutters ? 'right-0' : 'right-4',
        '-translate-y-1/2',
      )}
    >
      {children}
    </div>
  );
});

export default ListItemSecondaryAction;
