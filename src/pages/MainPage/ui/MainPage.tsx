import { classNames } from 'shared/lib/classNames/classNames';
import { CatalogList as CatalogListTypes } from 'shared/api/kinopoisk/models';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { CatalogCard } from 'entities/CatalogCard';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { GridList } from 'shared/ui/GridList/GridList';
import cls from './CatalogList.module.scss';

interface CatalogListProps {
  className?: string;
  error?: string;
  items: CatalogListTypes;
  isLoading: boolean;
  loadingMore: boolean;
}

export default function CatalogList (props: CatalogListProps) {
  const {
    className,
    items,
    isLoading = false,
    loadingMore = false,
    error = '',
  } = props;

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading && loadingMore) {
    return <PageLoader />;
  }

  if (items.length < 1 && !loadingMore) {
    return (
      <Text align={TextAlign.CENTER} title='Ничего не найдено' />
    );
  }

  return (
    <GridList className={classNames(cls.CatalogList, {}, [className])}>
      {items.map((item, index) => (
        <CatalogCard
          genres={item.genres}
          countries={item.countries}
          key={item.kinopoiskId || index}
          kinopoiskId={item.kinopoiskId}
          ratingKinopoisk={item.ratingKinopoisk}
          nameRu={item.nameRu}
          posterUrl={item.posterUrl}
          posterUrlPreview={item.posterUrlPreview}
          year={item.year}
        />
      ))}
    </GridList>

  );
};
