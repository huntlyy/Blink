import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MovieBackgroundBlock.module.scss';

interface MovieBackgroundBlockProps {
    className?: string;
    url?: string;
}

export const MovieBackgroundBlock = (props: MovieBackgroundBlockProps) => {
    const { className, url } = props;

    return (
        <div className={classNames(cls.MovieBackgroundBlock, {}, [className])}>
            <img style={{ backgroundImage: url }} />
        </div>
    );
};
