import { forwardRef } from 'react';
import { classNames } from '../../utils/tailwind';

type IDialogFooter = {
  children: React.ReactNode;
  className?: string;
};

const DialogFooter = forwardRef<HTMLDivElement, IDialogFooter>(
  ({ children, className }: IDialogFooter, ref) => (
    <div
      className={classNames(
        'flex',
        'items-center',
        'justify-end',
        'flex-none',
        'space-x-spacing-base-8',
        'mt-spacing-base-16',
        className,
      )}
      ref={ref}
    >
      {children}
    </div>
  ),
);

export default DialogFooter;
