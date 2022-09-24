import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ITabListProps = {
  children: React.ReactNode;
};

const TabList = React.forwardRef<HTMLDivElement, ITabListProps>(
  (props: ITabListProps, ref) => {
    const { children } = props;

    return (
      <HeadlessTab.List
        className={classNames(
          '-mb-px',
          'flex',
          'space-x-8',
          'border-b border-gray-200',
        )}
        ref={ref}
      >
        {children}
      </HeadlessTab.List>
    );
  },
);

export default TabList;
