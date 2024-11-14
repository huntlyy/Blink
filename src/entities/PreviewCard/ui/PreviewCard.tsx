import { CatalogItem } from 'entities/Film/model/types/Film';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import cls from './PreviewCard.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { RatingMovie } from 'shared/ui/RatingMovie/ui/RatingMovie';
import { List, ListTheme } from 'shared/ui/List/List';
import { memo, useCallback, useEffect, useState } from 'react';

interface PreviewCardProps extends CatalogItem {
    className?: string;
}

export const PreviewCard = memo((props: PreviewCardProps) => {
    const {
        className,
        countries,
        genres,
        kinopoiskId,
        nameRu,
        posterUrl,
        posterUrlPreview,
        ratingKinopoisk,
        year,
    } = props;

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 3840);

    const handleResize = useCallback(() => {
        setIsWideScreen(window.innerWidth > 3840);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const createList = useCallback(
        (
            items: { genre?: string; country?: string }[],
            key: 'genre' | 'country',
        ) => {
            return items.map((item) => ({ label: item[key] || '' }));
        },
        [],
    );

    const genresList = createList(genres, 'genre');
    const countriesList = createList(countries, 'country');

    return (
        <li>
            <Card
                className={classNames(cls.PreviewCard, {}, [className])}
                alt={`Постер для фильма ${nameRu}`}
                src={isWideScreen ? posterUrl : posterUrlPreview}
                withOverflow
                to={`${RoutePath.main}/${kinopoiskId}`}
            >
                <RatingMovie
                    className={cls.rating}
                    rating={ratingKinopoisk}
                />
                <div className={cls.info}>
                    <List
                        className={cls.list}
                        list={genresList}
                    />
                    <List
                        className={cls.list}
                        list={countriesList}
                        theme={ListTheme.OUTLINE}
                    />
                    <h6 className={cls.name}>{nameRu}</h6>
                    <span className={cls.year}>{year}</span>
                </div>
            </Card>
        </li>
    );
});
