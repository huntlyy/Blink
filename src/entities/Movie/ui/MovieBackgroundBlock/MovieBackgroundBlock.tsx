import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MovieBackgroundBlock.module.scss';
import { ReactNode } from 'react';

interface MovieBackgroundBlockProps {
    className?: string;
    url?: string;
    children: ReactNode
}

export const MovieBackgroundBlock = (props: MovieBackgroundBlockProps) => {
    const { className, url, children } = props;

    return (
        <div className={classNames(cls.MovieBackgroundBlock, {}, [className])}>
            <img style={{ backgroundImage: url }} />
            {children && <div className={classNames('', {}, [className])}>{children}</div>}
        </div>
    );
};
