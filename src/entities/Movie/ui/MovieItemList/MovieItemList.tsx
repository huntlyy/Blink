import { ItemMovie } from 'entities/Movie/model/types/types';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { MovieItem } from '../MovieItem/MovieItem';
import { GridList } from 'shared/ui/GridList/GridList';

interface MovieItemListProps {
    className?: string;
    data?: ItemMovie[];
    isLoading?: boolean;
}

const getSkeletons = () => {
    return (
        <div>
            <Skeleton
                height={100}
                width={100}
            />
            <Skeleton
                height={100}
                width={100}
            />
            <Skeleton
                height={100}
                width={100}
            />
            <Skeleton
                height={100}
                width={100}
            />
            <Skeleton
                height={100}
                width={100}
            />
        </div>
    );
};

export const MovieItemList = memo((props: MovieItemListProps) => {
    const { data, className, isLoading } = props;

    const renderMovie = (data: ItemMovie) => {
        return (
            <MovieItem
                key={data.kinopoiskId}
                data={data}
            />
        );
    };

    return (
        <div className={classNames('', {}, [className])}>
            <GridList>
            {data.length > 0 ? data.map(renderMovie) : null}
            {isLoading && getSkeletons()}
            </GridList>
        </div>
    );
});
