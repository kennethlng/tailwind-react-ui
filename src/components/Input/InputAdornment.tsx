import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

export type IInputAdornmentProps = {
  children: React.ReactNode;
  position: 'start' | 'end';
  disablePointerEvents?: boolean;
};

export default function InputAdornment({
  position,
  children,
  disablePointerEvents,
}: IInputAdornmentProps) {
  return (
    <div
      className={classNames(
        'flex',
        'items-center',
        'whitespace-nowrap',
        'gap-1',
        position === 'start' && 'mr-2',
        position === 'end' && 'ml-2',
        disablePointerEvents && 'pointer-events-none',
      )}
    >
      {typeof children === 'string' ? (
        <Typography color="secondary">{children}</Typography>
      ) : (
        children
      )}
    </div>
  );
}
