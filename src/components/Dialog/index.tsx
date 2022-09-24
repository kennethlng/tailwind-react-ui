import { Dialog as HeadlessDialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import * as R from 'ramda';
import DialogTitle from './Title';
import CloseButton from './CloseButton';
import DialogContent from './Content';
import DialogFooter from './Footer';
import DialogDescription from './Description';
import { IBreakpoint } from '../../types/breakpoint';
import { classNames } from '../../utils/tailwind';
import { noop } from '../../utils/ramda';
import Paper from '../Paper';

export type IDialogProps = {
  open?: boolean;
  onClose?: (open: boolean) => void;
  children: React.ReactNode;
  width?: IBreakpoint;
  padding?: boolean;
  fullHeight?: boolean;
};

const MaxWidthClass: Record<IBreakpoint, string> = {
  xs: 'max-w-screen-xs',
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  xxl: 'max-w-screen-xxl',
} as const;

function Dialog({
  children,
  open = false,
  width = 'sm',
  onClose,
  padding = true,
  fullHeight,
}: IDialogProps) {
  const maxWidthClass = MaxWidthClass[width];

  return (
    <Transition appear show={open} as={Fragment}>
      <HeadlessDialog
        as="div"
        className={classNames('fixed', 'inset-0', 'z-50', 'overflow-y-auto')}
        onClose={onClose || noop}
      >
        <div
          className={classNames(
            'h-full w-full',
            'flex',
            'justify-center',
            'items-center',
          )}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <HeadlessDialog.Overlay
              data-testid="dialog-overlay"
              className={classNames(
                'fixed',
                'inset-0',
                'bg-colors-background-overlay-default',
              )}
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block align-middle h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Paper
              data-testid="dialog-paper"
              className={classNames(
                'relative',
                'overflow-y-auto',
                'flex',
                'flex-col',
                'max-h-max-height-base-0.75',
                maxWidthClass,
                'w-full',
                padding && 'p-spacing-base-24',
                fullHeight ? 'h-full' : '',
                'transform',
                'transition-all',
              )}
            >
              {children}
              {onClose && <CloseButton onClick={R.partial(onClose, [false])} />}
            </Paper>
          </Transition.Child>
        </div>
      </HeadlessDialog>
    </Transition>
  );
}

Dialog.Title = DialogTitle;
Dialog.Description = DialogDescription;
Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;

export default Dialog;
