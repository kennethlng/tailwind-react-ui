import { Dialog } from '@headlessui/react';
import { forwardRef } from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

type IDialogTitleProps = {
  children: JSX.Element | string;
  className?: string;
};

const DialogTitle = forwardRef<HTMLElement, IDialogTitleProps>(
  ({ children, className }: IDialogTitleProps, ref) => (
    <Dialog.Title
      ref={ref}
      as={Typography}
      variant="h5"
      align="center"
      className={classNames('flex-none', 'mb-spacing-base-32', className)}
    >
      {children}
    </Dialog.Title>
  ),
);

export default DialogTitle;
