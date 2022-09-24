import React from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

export type IFormDescriptionProps = {
  children: string;
};

const FormDescription = React.forwardRef<
  HTMLSpanElement,
  IFormDescriptionProps
>((props: IFormDescriptionProps, ref) => {
  const { children } = props;
  return (
    <Typography
      as="span"
      variant="body3"
      color="tertiary"
      ref={ref}
      className={classNames('relative', 'p-0', 'mb-1')}
    >
      {children}
    </Typography>
  );
});

export default FormDescription;
