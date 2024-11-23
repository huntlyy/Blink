import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MovieImageBlock.module.scss';

interface MovieImageBlockProps {
    className?: string;
    src: string;
    alt: string;
}

export const MovieImageBlock = (props: MovieImageBlockProps) => {
    const { alt, src, className } = props;

    if (!src) {
        return null;
    }

    return (
        <div className={classNames(cls.MovieImageBlock, {}, [className])}>
            <img
                className={cls.img}
                src={src}
                alt={alt}
            />
        </div>
    );
};
