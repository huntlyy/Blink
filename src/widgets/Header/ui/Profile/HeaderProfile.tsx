import { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HeaderProfile.module.scss';

interface HeaderProfileProps {
    className?: string;
}

export const HeaderProfile = ({ className }: HeaderProfileProps) => {
    const [AuthIsOpen, setAuthIsOpen] = useState<boolean>(false);

    const openAuthModal = () => {
        setAuthIsOpen(true);
    };

    const closeAuthModal = () => {
        setAuthIsOpen(false);
    };

    return (
        <div className={classNames(cls.HeaderProfile, {}, [className!])}>
            <Button onClick={openAuthModal}>ВОЙТИ</Button>
        </div>
    );
};
