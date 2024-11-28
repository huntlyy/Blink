import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './MovieBackgroundBlock.module.scss';

interface MovieBackgroundBlockProps {
    className?: string;
    url?: string;
    children: ReactNode;
}

export const MovieBackgroundBlock = (props: MovieBackgroundBlockProps) => {
    const { className, url, children } = props;

    return (
        <div
            className={classNames(cls.MovieBackgroundBlock, {}, [className])}
            style={{
                backgroundImage: url ? `url(${url})` : undefined,
            }}
        >
            {children && <div className={cls.content}>{children}</div>}
        </div>
    );
};
