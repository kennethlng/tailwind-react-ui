import React from 'react';
import { classNames } from '../../utils/tailwind';
import Paper from '../Paper';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';

export type ICardProps = {
  children: React.ReactNode;
  className?: string;
};

const CardBase = React.forwardRef<HTMLDivElement, ICardProps>(
  (props: ICardProps, ref) => {
    const { children, className } = props;

    return (
      <Paper ref={ref} className={classNames('overflow-hidden', className)}>
        {children}
      </Paper>
    );
  },
);

const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});

export default Card;
