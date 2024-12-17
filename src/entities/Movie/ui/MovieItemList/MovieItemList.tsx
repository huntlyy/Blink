import { ItemMovie } from 'entities/Movie/model/types/types';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { MovieItem } from '../MovieItem/MovieItem';
import { GridList } from 'shared/ui/GridList/GridList';

interface MovieItemListProps {
    className?: string;
    data: ItemMovie[];
    isLoading?: boolean;
}

export const MovieItemList = memo((props: MovieItemListProps) => {
    const { data, className, isLoading } = props;

    if (isLoading) {
       return <div>
        <Skeleton
            height={400}
            width={256}
        />
        <Skeleton
            height={400}
            width={256}
        />
        <Skeleton
            height={400}
            width={256}
        />
        <Skeleton
            height={400}
            width={256}
        />
        <Skeleton
            height={400}
            width={256}
        />
        <Skeleton
            height={400}
            width={256}
        />
    </div>
    }

    const renderMovie = (data: ItemMovie, index: number) => (
        <MovieItem
            key={data.kinopoiskId || index}
            data={data}
        />
    )

    return (
        <div className={classNames('', {}, [className])}>
            <GridList>
            {data.length > 0 ? data.map(renderMovie) : null}
            </GridList>
        </div>
    );
});