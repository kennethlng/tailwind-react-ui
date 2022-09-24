import { Tab as HeadlessTab } from '@headlessui/react';
import { classNames } from '../../utils/tailwind';

export type ITabGroupProps = {
  children: React.ReactNode;
};

export default function TabGroup(props: ITabGroupProps) {
  const { children } = props;

  return (
    <HeadlessTab.Group
      as="div"
      className={classNames('w-full', 'px-2', 'py-16', 'sm:px-0')}
    >
      {children}
    </HeadlessTab.Group>
  );
}
