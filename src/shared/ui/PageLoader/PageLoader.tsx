import { Loader } from "../Loader/Loader"
import { classNames } from "shared/lib/classNames/classNames"
import * as cls from './PageLoader.module.scss'

export interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({className}: PageLoaderProps) => {
    return <div className={classNames(cls.PageLoader, {}, [className])}><Loader /></div>
}