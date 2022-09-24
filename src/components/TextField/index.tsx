import React from 'react';
import Form from '../Form';
import Input, { IInputProps } from '../Input';

export type ITextFieldProps = IInputProps & {
  label?: string;
  helperText?: React.ReactNode;
};

const TextField = React.forwardRef<HTMLDivElement, ITextFieldProps>(
  (props, ref) => {
    const { fullWidth, helperText, label } = props;

    return (
      <Form.Control fullWidth={fullWidth} ref={ref}>
        {label && <Form.Label>{label}</Form.Label>}

        <Input {...props} />

        {helperText && <Form.HelperText>{helperText}</Form.HelperText>}
      </Form.Control>
    );
  },
);

export default TextField;
