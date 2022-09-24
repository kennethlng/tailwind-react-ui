import { BasePlacement, VariationPlacement } from '@popperjs/core';
import { usePopper } from 'react-popper';
import { cloneElement, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';
import { DisplayPriority, IDisplayPriority } from '../../types/zIndex';

export type ITooltipProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  /**
   * Tooltip placement.
   * TODO: Custom classes need to be created for the arrow
   * to support the AutoPlacement options.
   * See tutorial at https://popper.js.org/docs/v2/tutorial/#arrow.
   */
  placement?: BasePlacement | VariationPlacement;
  /**
   * Tooltip text. Zero-length text string are never displayed.
   */
  text?: string;
  displayPriority?: IDisplayPriority;
};

export const getArrowOffsetClass = (
  placement: BasePlacement | VariationPlacement,
) => {
  if (placement.startsWith('top')) {
    return '-bottom-spacing-base-4';
  }

  if (placement.startsWith('bottom')) {
    return '-top-spacing-base-4';
  }

  if (placement.startsWith('left')) {
    return '-right-spacing-base-4';
  }

  if (placement.startsWith('right')) {
    return '-left-spacing-base-4';
  }

  return '';
};

function Tooltip({
  children,
  placement = 'top',
  text = '',
  displayPriority = 'tooltip',
}: ITooltipProps) {
  const [isShowing, setIsShowing] = useState(false);
  const [referenceElement, setReferenceElement] =
    useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] =
    useState<HTMLDivElement | null>(null);
  const [arrowElement, setArrowElement] =
    useState<HTMLSpanElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'flip',
      },
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
      { name: 'arrow', options: { element: arrowElement }, enabled: true },
    ],
  });

  const show = () => setIsShowing(true);
  const hide = () => setIsShowing(false);

  useEffect(() => {
    if (!referenceElement) {
      return;
    }

    referenceElement.addEventListener('mouseenter', show);
    referenceElement.addEventListener('focus', show);
    referenceElement.addEventListener('mouseleave', hide);
    referenceElement.addEventListener('blur', hide);

    // eslint-disable-next-line consistent-return
    return () => {
      referenceElement.removeEventListener('mouseenter', show);
      referenceElement.removeEventListener('focus', show);
      referenceElement.removeEventListener('mouseleave', hide);
      referenceElement.removeEventListener('blur', hide);
    };
  }, [referenceElement]);

  const childrenEl = cloneElement(children, {
    ref: setReferenceElement,
  });

  return (
    <>
      {childrenEl}
      {isShowing &&
        text &&
        createPortal(
          <div
            role="tooltip"
            className={classNames(
              'bg-opacity-opacity-base-8',
              DisplayPriority[displayPriority],
            )}
            ref={setPopperElement}
            style={styles.popper}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...attributes.popper}
          >
            <div
              className={classNames(
                'rounded-border-radius-base-4',
                'p-spacing-base-8',
                'bg-colors-base-black-100',
              )}
            >
              <Typography
                variant="body3"
                color="inherit"
                className="text-white"
              >
                {text}
              </Typography>
            </div>
            <span
              // Arrow styles are applied in the #tooltip-arrow class in the styles.css file.
              // TODO: After upgrading to Tailwind 3.0, move the styles here into the className
              id="tooltip-arrow"
              data-popper-arrow
              ref={setArrowElement}
              className={classNames(
                getArrowOffsetClass(placement),
                DisplayPriority[displayPriority],
              )}
              style={styles.arrow}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

export default Tooltip;
