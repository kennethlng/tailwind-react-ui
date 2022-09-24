import React from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

export type IFormLabelProps = {
  children: string;
};

const FormLabel = React.forwardRef<HTMLLabelElement, IFormLabelProps>(
  (props: IFormLabelProps, ref) => {
    const { children } = props;
    return (
      <Typography
        as="label"
        variant="body2"
        color="secondary"
        bold
        ref={ref}
        className={classNames('relative', 'p-0')}
      >
        {children}
      </Typography>
    );
  },
);

export default FormLabel;
