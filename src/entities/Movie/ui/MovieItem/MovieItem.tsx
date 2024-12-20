import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ItemMovie } from 'entities/Movie/model/types/types';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { RatingMovie } from 'shared/ui/RatingMovie/ui/RatingMovie';
import cls from './MovieItem.module.scss'

interface MovieItemProps {
    className?: string;
    data?: ItemMovie;
}

export const MovieItem = memo((props: MovieItemProps) => {
    const { className, data } = props;
    const navigate = useNavigate();

    const onOpenMovie = useCallback(() => {
        navigate(RoutePath.movie_details + data.kinopoiskId);
    }, [navigate, data.kinopoiskId]);

    console.log(data)

    return (
        <div className={classNames(cls.MovieItem, {}, [className])}>
             <Card
            onClick={onOpenMovie}
            src={data?.posterUrlPreview}
            alt={data?.nameRu}
            className={classNames('', {}, [className])}
        >
            <RatingMovie rating={data?.ratingKinopoisk} className={cls.rating} />
            <Text title={data?.nameRu} className={cls.info}/>
            <Text text={data?.year} className={cls.info}/>
        </Card>
        </div>
    );
});
