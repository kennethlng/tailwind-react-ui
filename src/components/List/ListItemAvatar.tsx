import React from 'react';
import { AlignSelfClass, IAlignSelf } from '../../types/flexboxAndGrid';
import { classNames } from '../../utils/tailwind';

export type IListItemAvatarProps = {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  align?: IAlignSelf;
};

const ListItemAvatar = React.forwardRef<HTMLDivElement, IListItemAvatarProps>(
  (props: IListItemAvatarProps, ref) => {
    const { children: childrenProp, align } = props;

    const children = React.cloneElement(childrenProp, {
      size: 'px32',
    });

    return (
      <div
        className={classNames(
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

export default ListItemAvatar;
