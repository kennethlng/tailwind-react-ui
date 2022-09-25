import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { classNames } from '../../utils/tailwind';
import Form from '../Form';
import Input from '../Input';
import Paper from '../Paper';
import SelectOption from './SelectOption';
import { ISelectOption } from './types';

export type ISelectProps = {
  value: any;
  disabled?: boolean;
  onChange: (value: any) => void;
  label?: string;
  options?: ISelectOption[];
  name?: string;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
};

function SelectBase(props: ISelectProps) {
  const {
    value,
    disabled,
    fullWidth,
    onChange,
    label,
    options = [],
    name,
    helperText,
  } = props;

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled} name={name}>
      <Form.Control fullWidth={fullWidth}>
        {label && <Listbox.Label as={Form.Label}>{label}</Listbox.Label>}
        <div className="relative">
          <Listbox.Button className="w-full">
            <Input
              endAdornment={
                <Input.Adornment position="end" disablePointerEvents>
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Input.Adornment>
              }
              onChange={() => {}}
              value={value}
              className={classNames('pointer-events-none')}
              fullWidth
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={classNames('z-10')}>
              <Paper
                shadow
                className={classNames(
                  'max-h-60',
                  'w-full',
                  'absolute',
                  'overflow-auto',
                  'py-1',
                )}
              >
                {options.map((option) => (
                  <SelectOption key={option} value={option}>
                    {option}
                  </SelectOption>
                ))}
              </Paper>
            </Listbox.Options>
          </Transition>
        </div>
        {helperText && <Form.HelperText>{helperText}</Form.HelperText>}
      </Form.Control>
    </Listbox>
  );
}

const Select = Object.assign(SelectBase, {
  Option: SelectOption,
});

export default Select;
