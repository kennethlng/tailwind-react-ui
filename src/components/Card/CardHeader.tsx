import React from 'react';
import { classNames } from '../../utils/tailwind';
import Typography from '../Typography';

export type ICardHeaderProps = {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};

const CardHeader = React.forwardRef<HTMLDivElement, ICardHeaderProps>(
  (props: ICardHeaderProps, ref) => {
    const { title: titleProp, subtitle: subtitleProp } = props;

    let title;
    if (titleProp && typeof titleProp === 'string') {
      title = (
        <Typography variant="h5" bold as="span" className="block">
          {titleProp}
        </Typography>
      );
    }

    let subtitle;
    if (subtitleProp && typeof subtitleProp === 'string') {
      subtitle = (
        <Typography
          variant="body1"
          color="secondary"
          as="span"
          className="block"
        >
          {subtitleProp}
        </Typography>
      );
    }

    return (
      <div className={classNames('flex', 'items-center', 'p-4')} ref={ref}>
        <div className="flex-auto">
          {title}
          {subtitle}
        </div>
      </div>
    );
  },
);

export default CardHeader;
