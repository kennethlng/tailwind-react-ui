import { forwardRef } from 'react';
import { classNames } from '../../utils/tailwind';
import { ITypographyVariant } from '../Typography';
import { FontWeightVariant, VariantClasses } from '../Typography/styles';

export type ILinkProps = {
  variant?: ITypographyVariant;
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
};

const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
  (props: ILinkProps, ref) => {
    const { variant = 'inherit', children, href, target } = props;

    return (
      <a
        className={classNames(
          VariantClasses[variant],
          FontWeightVariant(variant, false),
          'underline',
          'text-colors-link-primary-default',
          'hover:text-colors-link-primary-hover',
          'visited:text-colors-link-primary-active',
        )}
        href={href}
        ref={ref}
        target={target}
      >
        {children}
      </a>
    );
  },
);

export default Link;
