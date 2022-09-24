import { Menu } from '@headlessui/react';
import React from 'react';
import List from '../List';

export type IMenuItemProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const MenuItem = React.forwardRef<HTMLDivElement, IMenuItemProps>(
  (props: IMenuItemProps, ref) => {
    const { children, onClick } = props;

    return (
      <Menu.Item as={List.Item.Button} ref={ref} onClick={onClick}>
        {children}
      </Menu.Item>
    );
  },
);

export default MenuItem;
