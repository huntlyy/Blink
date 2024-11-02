import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogItem } from 'shared/api/kinopoisk/models';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { RatingMovie } from 'shared/ui/RatingMovie/ui/RatingMovie';
import { List, ListTheme } from 'shared/ui/List/List';
import { Card } from 'shared/ui/Card/Card';
import cls from './CatalogPreviewCard.module.scss';

interface CatalogCardProps extends CatalogItem{
  className?: string;
}

const isWideScreen = window.innerWidth > 3840;

export const CatalogCard = (props: CatalogCardProps) => {
  const {
    countries, genres, kinopoiskId, nameRu, posterUrl, posterUrlPreview, ratingKinopoisk, year, className
  } = props;

  const genresList = genres.map((item) => ({ label: item.genre }));
  const countriesList = countries.map((item) => ({ label: item.country }));

  return (
    <li>
      <Card
        withOverflow
        className={classNames(cls.CatalogPreviewCard, {}, [className])}
        src={isWideScreen ? posterUrl : posterUrlPreview}
        alt={`Постер для фильма ${nameRu}`}
        to={`${RoutePath.main}/${kinopoiskId}`}
      >

        <RatingMovie className={cls.rating} rating={ratingKinopoisk} />

        <div className={cls.info}>
          <List disableHover className={cls.tagList} list={genresList} />
          <List disableHover className={cls.tagList} list={countriesList} theme={ListTheme.OUTLINE} />

          <h6 className={cls.name}>
            {nameRu}
          </h6>
          <span className={cls.year}>{year}</span>
        </div>
      </Card>
    </li>
  );
};
