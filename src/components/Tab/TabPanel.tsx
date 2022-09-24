import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../utils/tailwind';

export type ITabPanelProps = {
  children: React.ReactNode;
};

const TabPanel = React.forwardRef<HTMLDivElement, ITabPanelProps>(
  (props: ITabPanelProps, ref) => {
    const { children } = props;

    return (
      <HeadlessTab.Panel ref={ref} className={classNames('p-2')}>
        {children}
      </HeadlessTab.Panel>
    );
  },
);

export default TabPanel;
