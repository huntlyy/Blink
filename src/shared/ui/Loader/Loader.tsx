import { classNames } from 'shared/lib/classNames/classNames';

export interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('lds-facebook', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
