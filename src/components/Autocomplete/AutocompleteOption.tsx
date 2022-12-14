import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import React from 'react';
import List from '../List';
import { IAutocompleteOption } from './types';

export type IAutocompleteOptionProps = {
  value: IAutocompleteOption;
  children: React.ReactNode;
};

const AutocompleteOption = React.forwardRef<
  HTMLDivElement,
  IAutocompleteOptionProps
>((props: IAutocompleteOptionProps, ref) => {
  const { value, children } = props;

  return (
    <Combobox.Option value={value} as={List.Item.Button} ref={ref}>
      {({ selected }) => (
        <>
          <List.Item.Text primary={children} />
          {selected && (
            <List.Item.SecondaryAction>
              <CheckIcon className="h-5 w-5" aria-hidden="true" />
            </List.Item.SecondaryAction>
          )}
        </>
      )}
    </Combobox.Option>
  );
});

export default AutocompleteOption;
