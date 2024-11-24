import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MovieImageBlock.module.scss';
import { Image } from 'shared/ui/Image/Image';

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
            <Image
                className={cls.img}
                src={src}
                alt={alt}

            />
        </div>
    );
};
