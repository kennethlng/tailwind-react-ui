import { Tab as HeadlessTab } from '@headlessui/react';
import React from 'react';

export type ITabPanelsProps = {
  children: React.ReactNode;
};

const TabPanels = React.forwardRef<HTMLDivElement, ITabPanelsProps>(
  (props: ITabPanelsProps, ref) => {
    const { children } = props;

    return (
      <HeadlessTab.Panels ref={ref} className="mt-2">
        {children}
      </HeadlessTab.Panels>
    );
  },
);

export default TabPanels;
