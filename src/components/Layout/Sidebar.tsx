import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { classNames } from '../../utils/tailwind';
import useBreakpoint from '../../hooks/useBreakpoint';

export type ISidebarFn = {
  open: boolean;
  toggleNav: () => void;
};

export type ISidebarProps = {
  children: ((props: ISidebarFn) => React.ReactNode) | React.ReactNode;
  header?: (props: ISidebarFn) => React.ReactNode;
  backdropClassName?: string;
  className?: string;
};

function Sidebar({
  children,
  className,
  header,
  backdropClassName,
}: ISidebarProps) {
  const [open, setOpen] = useState(false);
  const { breakpoint } = useBreakpoint();

  const useResponsive = breakpoint === 'xs' && header;
  const props = { toggleNav: () => useResponsive && setOpen(!open), open };

  /// Close when breakpoint changes
  useEffect(() => {
    if (breakpoint !== 'xs' && open) {
      setOpen(false);
    }
  }, [breakpoint]);

  const content = () => {
    if (typeof children === 'function') {
      return children(props);
    }
    return children;
  };

  return (
    <div
      className={classNames(
        'flex',
        'flex-col',
        useResponsive ? 'sm:w-[280px]' : 'w-[280px]',
        className,
      )}
    >
      {useResponsive ? (
        <>
          {/* Expand button */}
          {header(props)}
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            className={classNames(
              'fixed inset-0 overflow-y-auto',
              backdropClassName,
            )}
          >
            {content()}
          </Dialog>
        </>
      ) : (
        content()
      )}
    </div>
  );
}

export default Sidebar;
