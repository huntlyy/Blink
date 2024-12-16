import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface ImageProps {
    className?: string;
    src: string;
    alt: string;
}

export const Image = memo((props: ImageProps) => {
    const { src, className, alt } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <img
                src={src}
                alt={alt}
            />
        </div>
    );
});
