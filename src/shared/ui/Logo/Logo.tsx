import { memo } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from '../AppLink/AppLink';
import { Icon } from '../Icon/Icon';
import LogoIcon from '../../assets/icons/LogoIcon.svg';
import cls from './Logo.module.scss';

interface LogoProps {
    className?: string;
}

export const Logo = memo((props: LogoProps) => {
    const { className } = props;

    return (
        <AppLink
            to={RoutePath.main}
            className={classNames(cls.Logo, {}, [className])}
        >
            <Icon Svg={LogoIcon} />
        </AppLink>
    );
});
