import React from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

type IListItemTextProps = {
  primary?: React.ReactNode;
  secondary?: React.ReactNode;
  children?: React.ReactNode;
};

const ListItemText = React.forwardRef<HTMLDivElement, IListItemTextProps>(
  (props: IListItemTextProps, ref) => {
    const { primary: primaryProp, secondary: secondaryProp, children } = props;
    let primary = primaryProp ?? children;
    let secondary = secondaryProp;

    if (primary != null && typeof primary === 'string') {
      primary = (
        <Typography variant="body1" color="primary" className="block">
          {primaryProp}
        </Typography>
      );
    }

    if (secondary != null && typeof secondary === 'string') {
      secondary = (
        <Typography variant="body3" color="secondary" className="block">
          {secondaryProp}
        </Typography>
      );
    }

    return (
      <div className={classNames('flex-1', 'min-w-0', 'my-1')} ref={ref}>
        {primary}
        {secondary}
      </div>
    );
  },
);

export default ListItemText;
