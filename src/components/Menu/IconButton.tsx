import { Menu } from '@headlessui/react';
import React from 'react';
import IconButton from '../IconButton';

export type IMenuIconButtonProps = {
  children: React.ReactNode;
};

const MenuIconButton = React.forwardRef<
  HTMLButtonElement,
  IMenuIconButtonProps
>((props: IMenuIconButtonProps, ref) => {
  const { children } = props;
  return (
    <Menu.Button as={IconButton} ref={ref}>
      {children}
    </Menu.Button>
  );
});

export default MenuIconButton;
