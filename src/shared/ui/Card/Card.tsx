import { ReactNode } from "react"
import { AppLink } from "../AppLink/AppLink"
import { Mods, classNames } from "shared/lib/classNames/classNames"
import cls from './Card.module.scss'

interface CardProps {
    className?: string
    alt: string
    src: string
    to: string
    withOverflow: boolean
    heightSize?: number
    children?: ReactNode
}

export const Card = (props: CardProps) => {

    const {alt = 'Image', src = '', to, withOverflow = false, children, className, heightSize = 160} = props


    const mods: Mods = {
        [cls.overflow]: withOverflow
    }

    return <AppLink to={to} className={classNames(cls.Card, mods , [className])}>
        <div className={cls.wrapper_image} style={{paddingTop:`${heightSize}`}}>
            <img className={cls.image} src={src} alt={alt} /> {children && children}
        </div>
    </AppLink>
}