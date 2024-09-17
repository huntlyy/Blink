import { memo } from "react";
import { AppLink } from "../AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Icon } from "../Icon/Icon";
import LogoIcon from '../../assets/icons/Group 1.svg'
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Logo.module.scss'

interface LogoProps {
    className?: string
}

export const Logo = memo((props: LogoProps) => {

    const {className} = props

    return <AppLink to={RoutePath.main} className={classNames(cls.Logo, {}, [className])}>
        <Icon Svg={LogoIcon}/>
    </AppLink>
})