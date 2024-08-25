import { classNames } from "shared/lib/classNames/classNames"
import * as cls from './NotFoundPage.module.scss'
import { memo } from "react"

export interface NotFoundPageProps {
    className?: string
}

const NotFoundPage = (props: NotFoundPageProps) => {

    const {className} = props

    return <div className={classNames(cls.NotFoundPage, {}, [className])}>
        Страница не найдена
    </div>
}

export default NotFoundPage