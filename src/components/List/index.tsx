import React from 'react';
import ListItem from './ListItem';
import ListSubheader from './ListSubheader';

export type IListProps = {
  children: React.ReactNode;
  as?: React.ElementType<any>;
  className?: string;
};

const ListBase = React.forwardRef<HTMLUListElement, IListProps>(
  (props: IListProps, ref) => {
    const { children, as, className } = props;
    const Component = as || 'ul';
    return (
      <Component ref={ref} className={className}>
        {children}
      </Component>
    );
  },
);

const List = Object.assign(ListBase, {
  Item: ListItem,
  Subheader: ListSubheader,
});

export default List;
