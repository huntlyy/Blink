import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MovieImageBlock.module.scss';

interface MovieImageBlockProps {
    className?: string;
    src: string;
    alt: string;
}

export const MovieImageBlock = (props: MovieImageBlockProps) => {
    const { className, src, alt } = props;

    return (
        <div className={cls.wrapper}>
            <div className={classNames(cls.img_wrapper, {}, [className])}>
                <img
                    className={cls.img}
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    );
};
