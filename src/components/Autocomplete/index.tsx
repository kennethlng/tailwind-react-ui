import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import {
  ChevronDownActiveIcon,
  CloseCrossActiveIcon,
} from '@talkmore-inc/nomadic-icons';
import Paper from '../Paper';
import AutocompleteOption from './AutocompleteOption';
import { IAutocompleteOption } from './types';
import Chip, { IChipProps } from '../Chip';
import Form from '../Form';
import Input from '../Input';
import { classNames } from '../../utils/tailwind';

export type IAutocompleteProps = {
  options?: IAutocompleteOption[];
  values?: IAutocompleteOption[];
  onChange: (values: IAutocompleteOption[]) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: React.ReactNode;
  error?: boolean;
  renderChips?: (
    values: IAutocompleteOption[],
    getChipProps: (value: IAutocompleteOption) => IChipProps,
  ) => React.ReactNode;
};

function AutocompleteBase(props: IAutocompleteProps) {
  const {
    options = [],
    values = [],
    onChange,
    disabled,
    fullWidth,
    label,
    placeholder,
    error,
    helperText,
    renderChips,
  } = props;
  const [query, setQuery] = useState('');

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.toLowerCase().includes(query.toLowerCase()),
        );

  const removeOption = (selectedItem: IAutocompleteOption) => () => {
    const newValues = values.filter((x) => x !== selectedItem);
    onChange(newValues);
  };

  let startAdornment;
  if (values.length > 0) {
    // These are chip props that the Autocomplete component
    // needs to pass in to the chips.
    // These props will override any chip props that the client
    // passes in.
    const getCustomChipProps = (
      value: IAutocompleteOption,
    ): Partial<IChipProps> => ({
      disabled,
      secondaryActionIcon: <CloseCrossActiveIcon />,
      onSecondaryActionClick: removeOption(value),
    });

    if (renderChips) {
      // The client can render their own custom Chips and manipulate
      // the props. If the client calls `renderChips` they must remember
      // to also pass in the getTagProps provided by this Autocomplete.
      startAdornment = (
        <Input.Adornment position="start">
          {renderChips(values, getCustomChipProps)}
        </Input.Adornment>
      );
    } else {
      // By default the Autocomplete will render the values
      // as basic Chips.
      startAdornment = (
        <Input.Adornment position="start">
          {values.map((value) => (
            <Chip key={value} label={value} {...getCustomChipProps(value)} />
          ))}
        </Input.Adornment>
      );
    }
  }

  return (
    <Combobox value={values} onChange={onChange} multiple disabled={disabled}>
      <Form.Control fullWidth={fullWidth}>
        {label && <Combobox.Label as={Form.Label}>{label}</Combobox.Label>}
        <div className="relative">
          <Combobox.Input
            as={Input}
            startAdornment={startAdornment}
            fullWidth
            error={error}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            multiline
            endAdornment={
              <Combobox.Button>
                <ChevronDownActiveIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            }
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options
              as={Paper}
              className={classNames(
                'absolute',
                'mt-1',
                'max-h-60',
                'w-full',
                'overflow-auto',
                'py-1',
                'focus:outline-none',
              )}
            >
              {query.length > 0 && (
                <AutocompleteOption value={query}>{query}</AutocompleteOption>
              )}
              {filteredOptions.map((option) => (
                <AutocompleteOption key={option} value={option}>
                  {option}
                </AutocompleteOption>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
        {helperText && <Form.HelperText>{helperText}</Form.HelperText>}
      </Form.Control>
    </Combobox>
  );
}

const Autocomplete = Object.assign(AutocompleteBase, {
  Option: AutocompleteOption,
});

export { IAutocompleteOption };

export default Autocomplete;
