import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeButton, Button } from 'shared/ui/Button/Button';
import cls from './Burger.module.scss';

interface BurgerProps {
    className?: string;
    isOpen: boolean;
    onClick: () => void;
}

export const Burger = (props: BurgerProps) => {
    const { className, isOpen = false, onClick } = props;

    return (
        <div
            className={classNames(cls.Burger, { [cls.open]: isOpen }, [
                className,
            ])}
        >
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.burger}
                onClick={onClick}
            >
                <span className={cls.line1} />
                <span className={cls.line2} />
                <span className={cls.line3} />
                <span className={cls.line4} />
            </Button>
        </div>
    );
};
