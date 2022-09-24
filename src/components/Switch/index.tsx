import { Switch as HeadlessSwitch } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../utils/tailwind';
import Form from '../Form';

export type ISwitchProps = {
  fullWidth?: boolean;
  checked?: boolean;
  onChange?: (value: boolean) => void;
  label?: string;
  description?: string;
  name?: string;
  disabled?: boolean;
};

const Switch = React.forwardRef<HTMLDivElement, ISwitchProps>(
  (props: ISwitchProps, ref) => {
    const {
      fullWidth,
      checked = false,
      onChange = () => undefined,
      label,
      description,
      name,
      disabled,
    } = props;

    return (
      <HeadlessSwitch.Group as={Form.Control} ref={ref} fullWidth={fullWidth}>
        <div className={classNames('flex', 'items-center', 'justify-between')}>
          {(label || description) && (
            <span
              className={classNames('flex', 'flex-grow', 'flex-col', 'mr-2')}
            >
              {label && (
                <HeadlessSwitch.Label as={Form.Label} passive>
                  {label}
                </HeadlessSwitch.Label>
              )}
              {description && (
                <HeadlessSwitch.Description as={Form.Description}>
                  {description}
                </HeadlessSwitch.Description>
              )}
            </span>
          )}
          <HeadlessSwitch
            disabled={disabled}
            checked={checked}
            onChange={onChange}
            className={classNames(
              checked ? 'bg-indigo-600' : 'bg-gray-200',
              'relative',
              'inline-flex',
              'h-6',
              'w-11',
              'flex-shrink-0',
              'cursor-pointer',
              'rounded-full',
              'border-2',
              'border-transparent',
              'transition-colors',
              'duration-200',
              'ease-in-out',
              'disabled:opacity-opacity-disabled',
            )}
            name={name}
          >
            <span
              aria-hidden="true"
              className={classNames(
                checked ? 'translate-x-5' : 'translate-x-0',
                'pointer-events-none',
                'inline-block',
                'h-5',
                'w-5',
                'transform',
                'rounded-full',
                'bg-white',
                'shadow',
                'ring-0',
                'transition',
                'duration-200',
                'ease-in-out',
              )}
            />
          </HeadlessSwitch>
        </div>
      </HeadlessSwitch.Group>
    );
  },
);

export default Switch;
