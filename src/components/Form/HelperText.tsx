import React from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

export type IFormHelperTextProps = {
  children: React.ReactNode;
};

const FormHelperText = React.forwardRef<
  HTMLParagraphElement,
  IFormHelperTextProps
>((props: IFormHelperTextProps, ref) => {
  const { children: childrenProp } = props;

  let children;
  if (typeof childrenProp === 'string') {
    children = (
      <Typography
        as="p"
        ref={ref}
        variant="caption"
        align="left"
        color="secondary"
      >
        {childrenProp}
      </Typography>
    );
  } else {
    children = childrenProp;
  }

  return childrenProp ? (
    <div className={classNames('mt-1', 'mr-0', 'ml-0', 'mb-0')}>{children}</div>
  ) : null;
});

export default FormHelperText;
