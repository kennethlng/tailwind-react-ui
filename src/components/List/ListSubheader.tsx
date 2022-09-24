import React from 'react';
import { classNames } from '../../utils/tailwind';
import ListItemSecondaryAction from './ListItemSecondaryAction';

export type IListSubheaderProps = {
  children: React.ReactNode;
  secondaryAction?: React.ReactNode;
};

const ListSubheader = React.forwardRef<HTMLLIElement, IListSubheaderProps>(
  (props: IListSubheaderProps, ref) => {
    const { children, secondaryAction } = props;

    return (
      <li
        ref={ref}
        className={classNames(
          'list-none',
          'leading-8',
          'px-4',
          'text-gray-800',
          'text-sm',
          'text-left',
          'justify-start',
          'items-center',
          'relative',
          'w-full',
        )}
      >
        {children}
        {secondaryAction && (
          <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
        )}
      </li>
    );
  },
);

export default ListSubheader;
