import { ButtonHTMLAttributes, ReactNode, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import * as cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {

    const {className, theme, children, ...otherProps} = props

    return <button className={classNames(cls.Button, {[cls[theme]]: true}, [className])} {...otherProps}>
        {children}
    </button>
})