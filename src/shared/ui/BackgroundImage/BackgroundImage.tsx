import { Info } from "./Info/Info";
import { BgImage } from "./BgImage/BgImage";
import { Image } from "./Image/Image";
import { classNames } from "shared/lib/classNames/classNames";
import { ReactNode } from "react";
import cls from './BackgroundImage.module.scss'

interface BackgroundImageProps {
  className?: string;
  coverClassName?: string;
  src: string;
  alt: string;
  children: ReactNode;
  name: string;
  subName?: string;
  coverUrl?: string;
}

export const BackgroundImage = (props: BackgroundImageProps ) => {
  const {
    className,
    src,
    alt,
    children,
    name,
    subName,
    coverUrl,
    coverClassName,
  } = props;

  return (
    <div className={classNames(cls.BackgroundImage, {}, [className])}>

      {coverUrl && (
        <BgImage
          className={classNames('', {}, [coverClassName])}
          url={`url(${coverUrl})`}
        />
      )}

      <div className={cls.content}>

        <Image
          src={src}
          alt={alt}
        />

        <Info name={name} subName={subName}>
          {children}
        </Info>
      </div>

    </div>
  );
};