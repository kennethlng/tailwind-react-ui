import React from 'react';
import { AlignSelfClass, IAlignSelf } from '../../types/flexboxAndGrid';
import { classNames } from '../../utils/tailwind';

export type IListItemIconProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  align?: IAlignSelf;
};

const ListItemIcon = React.forwardRef<HTMLDivElement, IListItemIconProps>(
  (props: IListItemIconProps, ref) => {
    const { children: childrenProp, align } = props;

    const children = React.cloneElement(childrenProp, {
      className: classNames('h-8', 'w-8', 'text-gray-600'),
    });

    return (
      <div
        className={classNames(
          'inline-flex',
          'flex-shrink-0',
          'mr-2',
          align && AlignSelfClass[align],
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export default ListItemIcon;
