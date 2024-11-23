import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Image.module.scss';

interface ImageProps {
  className?: string;
  src: string;
  alt: string;
}

export const Image = (props: ImageProps) => {
    
    const {alt, src, className} = props

  if (!src) {
    return null;
  }

  return (
    <div className={classNames(cls.Image, {}, [className])}>
      <img
        className={cls.img}
        src={src}
        alt={alt}
      />
    </div>
  );
};
