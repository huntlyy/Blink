import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CoverBg.module.scss';

interface BgImageProps {
  className?: string;
  url: string; 
}

export const BgImage = (props: BgImageProps) => {

    const {url, className} = props

  if (!url) {
    return null;
  }

  return (
    <div
      className={classNames(cls.BgImage, {}, [className])}
      style={{ backgroundImage: url }}
    />
  );
};
