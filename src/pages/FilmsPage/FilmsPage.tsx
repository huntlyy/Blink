import { CatalogList } from 'entities/Film/model/types/Film';
import { classNames } from 'shared/lib/classNames/classNames';
import { GridList } from 'shared/ui/GridList/GridList';
import { Text } from 'shared/ui/Text/Text';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { PreviewCard } from 'entities/PreviewCard';
import { useSelector } from 'react-redux';
import { getFilmPageData, getFilmPageError } from './model/selectors/getFilmPage';
import { getFilmPageIsLoading } from './model/selectors/getFilmPage';
import { Loader } from 'shared/ui/Loader/Loader';
import { ErrorPage } from 'widgets/ErrorPage';

interface FilmPageProps {
    className?: string;
}

export default function FilmPage(props: FilmPageProps) {
    const { className } = props;
    const isLoading = useSelector(getFilmPageIsLoading)
    const error = useSelector(getFilmPageError)
    const data = useSelector(getFilmPageData)

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return <ErrorPage />
    }

    return (
        <GridList className={classNames('', {}, [className])}>
            {data.map((item, index) => (
            <PreviewCard
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
