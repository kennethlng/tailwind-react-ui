import React from 'react';
import { classNames } from '../../utils/tailwind';
import ListItemAvatar from './ListItemAvatar';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import ListItemSecondaryAction from './ListItemSecondaryAction';
import ListItemText from './ListItemText';

export type IListItemProps = {
  children: React.ReactNode;
  secondaryAction?: React.ReactNode;
  disablePadding?: boolean;
  disableGutters?: boolean;
  as?: React.ElementType<any>;
};

const ListItemBase = React.forwardRef<HTMLLIElement, IListItemProps>(
  (props: IListItemProps, ref) => {
    const { children, secondaryAction, disablePadding, disableGutters, as } =
      props;

    const Component = as || 'li';

    return (
      <Component
        ref={ref}
        className={classNames(
          'flex',
          'justify-start',
          'items-center',
          'relative',
          'w-full',
          'text-left',
          !disableGutters && 'px-4',
          !disablePadding && 'py-2',
        )}
      >
        {children}
        {secondaryAction && (
          <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
        )}
      </Component>
    );
  },
);

const ListItem = Object.assign(ListItemBase, {
  Avatar: ListItemAvatar,
  Icon: ListItemIcon,
  Button: ListItemButton,
  SecondaryAction: ListItemSecondaryAction,
  Text: ListItemText,
});

export default ListItem;
