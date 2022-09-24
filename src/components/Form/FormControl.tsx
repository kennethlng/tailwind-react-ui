import React from 'react';
import { classNames } from '../../utils/tailwind';

export type IFormControlProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

const FormControl = React.forwardRef<HTMLDivElement, IFormControlProps>(
  (props: IFormControlProps, ref) => {
    const { children, fullWidth } = props;

    return (
      <div
        ref={ref}
        className={classNames(
          'inline-flex',
          'flex-col',
          'relative',
          'min-w-0',
          'p-0',
          'align-top',
          'border-none',
          'mt-4',
          'mb-2',
          fullWidth && 'w-full',
        )}
      >
        {children}
      </div>
    );
  },
);

export default FormControl;
