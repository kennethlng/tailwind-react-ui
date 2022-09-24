import React from 'react';
import { classNames } from '../../utils/tailwind';
import InputAdornment from './InputAdornment';

export type IInputProps = {
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  multiline?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  required?: boolean;
  startAdornment?: React.ReactNode;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number;
  className?: string;
};

const InputBase = React.forwardRef<HTMLDivElement, IInputProps>(
  (props: IInputProps, ref) => {
    const {
      disabled,
      endAdornment,
      error,
      fullWidth,
      id,
      multiline,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      startAdornment,
      type,
      value,
      className,
    } = props;

    return (
      <div
        className={classNames(
          'relative',
          'inline-flex',
          'items-center',
          fullWidth && 'w-full',

          startAdornment ? 'pl-2' : '',
          endAdornment ? 'pr-2' : '',
          'rounded-md',
          'border',
          error ? 'border-red-300' : 'border-gray-300',
          error && 'placeholder-red-300 text-red-900',
          'shadow-sm',
          'disabled:cursor-not-allowed',
          'disabled:border-gray-200',
          'disabled:bg-gray-100',
          'disabled:text-gray-500',

          className,
        )}
        ref={ref}
      >
        {startAdornment}

        <input
          id={id}
          type={type}
          className={classNames(
            'block',
            'w-full',
            'min-w-0',
            'py-2',
            'px-2',
            'm-0',
            'bg-inherit',
            'border-none',
            'outline-none',
            multiline && classNames('h-auto', 'resize-none'),
          )}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          disabled={disabled}
        />

        {endAdornment}
      </div>
    );
  },
);

const Input = Object.assign(InputBase, {
  Adornment: InputAdornment,
});

export default Input;
