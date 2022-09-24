import React from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import Form from '../Form';
import RadioGroupOption from './RadioGroupOption';

export type IRadioGroupProps = {
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
  label?: string;
  description?: string;
  helperText?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
};

const RadioGroupBase = React.forwardRef<HTMLDivElement, IRadioGroupProps>(
  (props: IRadioGroupProps, ref) => {
    const {
      value,
      disabled,
      label,
      description,
      helperText,
      fullWidth,
      onChange,
      children,
    } = props;

    return (
      <HeadlessRadioGroup
        value={value}
        onChange={onChange}
        disabled={disabled}
        fullWidth={fullWidth}
        as={Form.Control}
        ref={ref}
      >
        {label && (
          <HeadlessRadioGroup.Label as={Form.Label}>
            {label}
          </HeadlessRadioGroup.Label>
        )}
        {description && (
          <HeadlessRadioGroup.Description as={Form.Description}>
            {description}
          </HeadlessRadioGroup.Description>
        )}
        <div className="space-y-2">{children}</div>
        {helperText && <Form.HelperText>{helperText}</Form.HelperText>}
      </HeadlessRadioGroup>
    );
  },
);

const RadioGroup = Object.assign(RadioGroupBase, {
  Option: RadioGroupOption,
});

export default RadioGroup;
