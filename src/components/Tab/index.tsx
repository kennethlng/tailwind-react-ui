import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../utils/tailwind';
import TabGroup from './TabGroup';
import TabList from './TabList';
import TabPanel from './TabPanel';
import TabPanels from './TabPanels';

export type ITabProps = {
  children: React.ReactNode;
};

const TabBase = React.forwardRef<HTMLButtonElement, ITabProps>(
  (props: ITabProps, ref) => {
    const { children } = props;
    return (
      <HeadlessTab
        ref={ref}
        className={({ selected }) =>
          classNames(
            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
            selected
              ? 'border-indigo-500 text-indigo-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          )
        }
      >
        {children}
      </HeadlessTab>
    );
  },
);

const Tab = Object.assign(TabBase, {
  Group: TabGroup,
  List: TabList,
  Panels: TabPanels,
  Panel: TabPanel,
});

export default Tab;
