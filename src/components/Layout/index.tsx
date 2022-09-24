import React from 'react';
import { classNames } from '../../utils/tailwind';
import Content from './Content';
import Sidebar from './Sidebar';

export type ILayoutProps = {
  children: React.ReactNode;
  responsive?: boolean;
  className?: string;
};

const LayoutBase = React.forwardRef<HTMLDivElement, ILayoutProps>(
  (props: ILayoutProps, ref) => {
    const { children, className, responsive = true } = props;
    return (
      <div
        ref={ref}
        className={classNames(
          'flex',
          responsive ? 'sm:flex-row flex-col duration-300' : '',
          'h-screen',
          className,
        )}
      >
        {children}
      </div>
    );
  },
);

const Layout = Object.assign(LayoutBase, {
  Sidebar,
  Content,
});

export default Layout;
