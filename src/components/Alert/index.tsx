import {
  CheckActiveIcon,
  InfoActiveIcon,
  StopActiveIcon,
  WarningActiveIcon,
} from '@talkmore-inc/nomadic-icons';
import React from 'react';
import { classNames } from '../../utils/tailwind';
import Paper from '../Paper';
import Typography from '../Typography';

type IAlertColor = 'success' | 'error' | 'warning' | 'info';

export type IAlertProps = {
  color?: IAlertColor;
  children: React.ReactNode;
  action?: React.ReactNode;
};

const BackgroundColorMap: Record<IAlertColor, string> = {
  success: 'bg-green-50',
  error: 'bg-red-50',
  warning: 'bg-yellow-50',
  info: 'bg-blue-50',
};

const IconMap: Record<
  IAlertColor,
  (props: React.SVGProps<SVGSVGElement>) => JSX.Element
> = {
  success: CheckActiveIcon,
  error: StopActiveIcon,
  info: InfoActiveIcon,
  warning: WarningActiveIcon,
} as const;

const IconColorMap: Record<IAlertColor, string> = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-yellow-400',
};

const TextColorMap: Record<IAlertColor, string> = {
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-blue-400',
  warning: 'text-yellow-400',
};

const Alert = React.forwardRef<HTMLDivElement, IAlertProps>(
  (props: IAlertProps, ref) => {
    const { color = 'success', children, action } = props;

    const Icon = IconMap[color];

    return (
      <Paper ref={ref} shadow={false} className="overflow-clip">
        <div
          className={classNames(
            'flex',
            'px-3',
            'py-2',
            BackgroundColorMap[color],
          )}
        >
          <div className="flex-shrink-0">
            <Icon className={classNames('h-6', 'w-6', IconColorMap[color])} />
          </div>
          <div
            className={classNames(
              'ml-3',
              'flex-1',
              'md:flex',
              'md:justify-between',
              TextColorMap[color],
            )}
          >
            <Typography color="inherit" variant="body2" className="mt-1">
              {children}
            </Typography>
            {action && (
              <div
                className={classNames(
                  'mt-2',
                  'flex',
                  'items-center',
                  'md:mt-0',
                  'md:ml-6',
                )}
              >
                {action}
              </div>
            )}
          </div>
        </div>
      </Paper>
    );
  },
);

export default Alert;
