import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ReactNode, memo } from 'react';
import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    CLASSIC = 'classic',
    BUTTON = 'button',
    CLEAR = 'clear',
    NAV_LINK = 'nav_link',
    ACCENT = 'accent',
    PRIMARY = 'primary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.ACCENT,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
