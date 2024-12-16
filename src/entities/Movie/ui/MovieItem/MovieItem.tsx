import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ItemMovie } from 'entities/Movie/model/types/types';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { RatingMovie } from 'shared/ui/RatingMovie/ui/RatingMovie';

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
        <div className={classNames('', {}, [className])}>
             <Card
            onClick={onOpenMovie}
            src={data?.posterUrlPreview}
            alt={data?.nameRu}
            className={classNames('', {}, [className])}
        >
            <RatingMovie rating={data?.ratingKinopoisk} />
            <Text title={data?.nameRu} />
            <Text text={data?.year} />
        </Card>
        </div>
    );
});
