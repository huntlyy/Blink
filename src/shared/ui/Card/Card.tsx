import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    alt: string;
    src: string;
    heightSize?: number;
    children?: ReactNode;
}

export const Card = (props: CardProps) => {
    const {
        alt = 'Image',
        src,
        children,
        className,
        heightSize = 160,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...otherProps}
        >
            <div
                className={cls.wrapper_image}
                style={{ paddingTop: `${heightSize}` }}
            >
                <img
                    className={cls.image}
                    src={src}
                    alt={alt}
                />{' '}
                {children}
            </div>
        </div>
    );
};
