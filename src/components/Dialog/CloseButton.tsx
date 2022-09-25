import { XMarkIcon } from '@heroicons/react/20/solid';
import { classNames } from '../../utils/tailwind';

type ICloseButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function CloseButton({ onClick }: ICloseButtonProps) {
  return (
    <div
      className={classNames(
        'block',
        'absolute',
        'top-0',
        'right-0',
        'pt-5',
        'pr-5',
      )}
    >
      <button
        data-testid="dialog-close-button"
        type="button"
        className={classNames('text-gray-400', 'hover:text-gray-500')}
        onClick={onClick}
      >
        <span className="sr-only">Close</span>
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

export default CloseButton;
