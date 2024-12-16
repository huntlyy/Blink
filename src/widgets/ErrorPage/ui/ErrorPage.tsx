import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ErrorPage.module.scss';

export interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props;

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>Произошла непредвиденная ошибка</p>
            <button onClick={reloadPage}>Обновить страницу</button>
        </div>
    );
};
