import React, { Fragment, useState } from 'react';
import { Menu as HeadlessMenu } from '@headlessui/react';
import { Placement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { createPortal } from 'react-dom';
import Paper from '../Paper';
import MenuItem from './MenuItem';
import MenuIconButton from './IconButton';
import { classNames } from '../../utils/tailwind';

export type IMenuProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  items: React.ReactNode;
  placement?: Placement;
};

function MenuBase(props: IMenuProps) {
  const { children: childrenProp, items, placement = 'auto' } = props;
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] =
    useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'flip',
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  const children = React.cloneElement(childrenProp, {
    ref: setReferenceElement,
  });

  return (
    <HeadlessMenu as={Fragment}>
      {({ open }) => (
        <>
          {children}
          {open &&
            createPortal(
              <HeadlessMenu.Items
                as={Paper}
                className={classNames('mt-1', 'w-56')}
                ref={setPopperElement}
                style={styles.popper}
                {...attributes.popper}
              >
                {items}
              </HeadlessMenu.Items>,
              document.body,
            )}
        </>
      )}
    </HeadlessMenu>
  );
}

const Menu = Object.assign(MenuBase, {
  Item: MenuItem,
  IconButton: MenuIconButton,
});

export default Menu;
