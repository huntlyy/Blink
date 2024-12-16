import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { HeaderProfile } from '../Profile/HeaderProfile';
import cls from './Menu.module.scss';
import { menuLinks } from './config';

interface MenuProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Menu = (props: MenuProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <div
            className={classNames(cls.Menu, { [cls.open]: isOpen }, [
                className,
            ])}
        >
            <nav className={cls.nav}>
                <ul className={cls.list}>
                    {menuLinks.map((link, index) => (
                        <li
                            key={index}
                            className={cls.item}
                        >
                            <AppLink
                                onClick={onClose}
                                className={cls.link}
                                to={link.to}
                            >
                                {link.text}
                            </AppLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <HeaderProfile className={cls.profile} />
        </div>
    );
};
