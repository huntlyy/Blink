import { classNames } from 'shared/lib/classNames/classNames';
import { FormEvent, memo, useState } from 'react';
import { Logo } from 'shared/ui/Logo/Logo';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Header.module.scss';
import { Burger } from './Burger/Burger';
import { Menu } from './Menu/Menu';
import { HeaderProfile } from './Profile/HeaderProfile';

interface HeaderProps {
    className?: string;
    onChange?: () => void;
}

export const Header = memo((props: HeaderProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const { className, onChange } = props;

    return (
        <header
            className={classNames(
                cls.Header,
                {
                    [cls.open]: collapsed,
                },
                [className, 'container'],
            )}
        >
            <div className={cls.row}>
                <Burger
                    isOpen={collapsed}
                    onClick={onToggle}
                    className={cls.burger}
                />
                <Logo />
                <ThemeSwitcher />
                <HeaderProfile className={cls.profile} />
            </div>
            <Menu
                onClose={onToggle}
                isOpen={collapsed}
            />
        </header>
    );
});
