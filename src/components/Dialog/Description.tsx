import { Dialog } from '@headlessui/react';
import { forwardRef } from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

type IDialogDescription = {
  children: string;
  className?: string;
};

const DialogDescription = forwardRef<HTMLElement, IDialogDescription>(
  ({ children, className }: IDialogDescription, ref) => (
    <Dialog.Description
      ref={ref}
      as={Typography}
      variant="subtitle"
      align="center"
      color="primary"
      className={classNames('flex-none', className)}
    >
      {children}
    </Dialog.Description>
  ),
);

export default DialogDescription;
