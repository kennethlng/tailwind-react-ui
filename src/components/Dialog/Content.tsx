import { forwardRef } from 'react';
import { classNames } from '../../utils/tailwind';

type IDialogContent = {
  children: React.ReactNode;
  className?: string;
};

const DialogContent = forwardRef<HTMLDivElement, IDialogContent>(
  ({ children, className }: IDialogContent, ref) => (
    <div
      className={classNames('flex-auto', 'overflow-y-auto', className)}
      ref={ref}
    >
      {children}
    </div>
  ),
);

export default DialogContent;
