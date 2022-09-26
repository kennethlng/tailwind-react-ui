import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';
import List from '../List';
import { ISelectOption } from './types';

export type ISelectOptionProps = {
  value: ISelectOption;
  children: React.ReactNode;
};

const SelectOption = React.forwardRef<HTMLLIElement, ISelectOptionProps>(
  (props: ISelectOptionProps, ref) => {
    const { value, children } = props;

    return (
      <Listbox.Option ref={ref} value={value}>
        {({ selected }) => (
          <List.Item.Button selected={selected}>
            <List.Item.Text primary={children} />
            {selected ? (
              <List.Item.SecondaryAction>
                <CheckIcon className="h-5 w-5" aria-hidden="true" />
              </List.Item.SecondaryAction>
            ) : null}
          </List.Item.Button>
        )}
      </Listbox.Option>
    );
  },
);

export default SelectOption;
