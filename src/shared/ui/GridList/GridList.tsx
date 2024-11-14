import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './GridList.module.scss';

interface GridListProps {
    className?: string;
    children?: ReactNode;
}

export const GridList = (props: GridListProps) => {
    const { children, className } = props;

    return (
        <ul className={classNames(cls.GridList, {}, [className])}>
            {children}
        </ul>
    );
};
