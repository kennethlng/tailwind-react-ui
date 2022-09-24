import React from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import { classNames } from '../../utils/tailwind';

export type IRadioGroupOptionProps = {
  children: string;
  value: any;
};

const RadioGroupOption = React.forwardRef<
  HTMLDivElement,
  IRadioGroupOptionProps
>((props, ref) => {
  const { children, value } = props;

  return (
    <HeadlessRadioGroup.Option
      ref={ref}
      value={value}
      className={classNames('flex', 'items-center')}
    >
      {({ active, checked }) => (
        <>
          <span
            className={classNames(
              checked
                ? 'bg-indigo-600 border-transparent'
                : 'bg-white border-gray-300',
              active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
              'h-4 w-4 rounded-full border flex items-center justify-center',
            )}
            aria-hidden="true"
          >
            <span className="rounded-full bg-white w-1.5 h-1.5" />
          </span>
          <HeadlessRadioGroup.Label
            as="p"
            className={classNames(
              'ml-3',
              'block',
              'text-sm',
              'font-medium',
              'text-gray-700',
            )}
          >
            {children}
          </HeadlessRadioGroup.Label>
        </>
      )}
    </HeadlessRadioGroup.Option>
  );
});

export default RadioGroupOption;
