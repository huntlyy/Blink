import { FilmItem } from 'entities/Film/model/types/Film';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';
import cls from './FilmCard.module.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { RatingMovie } from 'shared/ui/RatingMovie/ui/RatingMovie';
import { List, ListTheme } from 'shared/ui/List/List';
import { memo, useCallback, useEffect, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';

interface FilmCardProps extends FilmItem {
    className?: string;
}

export const FilmCard = memo((props: FilmCardProps) => {
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

    const [isWideScreen, setIsWideScreen] = useState(
        typeof window !== 'undefined' && window.innerWidth > 3840,
    );

    const handleResize = useCallback(() => {
        if (typeof window !== 'undefined') {
            setIsWideScreen(window.innerWidth > 3840);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [handleResize]);

    const createList = useCallback(
        <T extends { genre?: string; country?: string }>(
            items: T[],
            key: keyof T,
        ) => items.map((item) => ({ label: item[key] || '' })),
        [],
    );

    const genresList = createList(genres, 'genre');
    const countriesList = createList(countries, 'country');

    return (
        <li>
            <Card
                className={classNames(cls.FilmCard, {}, [className])}
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
                    <Text
                        title={nameRu}
                        className={cls.name}
                    />
                    <Text
                        text={year}
                        className={cls.year}
                    />
                </div>
            </Card>
        </li>
    );
});
