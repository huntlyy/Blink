import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import React from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    CLASSIC = 'classic',
    GRAY = 'gray',
    ACCENT = 'accent',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    children?: ReactNode;
    centered?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.CLASSIC,
        centered = true,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.centered]: centered,
        [cls[theme]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
