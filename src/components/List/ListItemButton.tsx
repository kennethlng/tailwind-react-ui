import React from 'react';
import { classNames } from '../../utils/tailwind';

export type IListItemProps = {
  children: React.ReactNode;
  selected?: boolean;
  disableGutters?: boolean;
} & React.HTMLProps<HTMLDivElement>;

const ListItemButton = React.forwardRef<HTMLDivElement, IListItemProps>(
  (props: IListItemProps, ref) => {
    const { children, selected, disableGutters, ...rest } = props;

    return (
      <div
        ref={ref}
        className={classNames(
          'flex',
          'grow',
          'justify-start',
          'items-center',
          'relative',
          'min-w-0',
          'text-left',
          'py-2',
          'cursor-pointer',
          !disableGutters && 'px-4',
          selected ? 'bg-gray-100' : 'hover:bg-gray-100',
        )}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

export default ListItemButton;
