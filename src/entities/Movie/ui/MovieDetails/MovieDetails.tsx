import { MovieDetailsReducer } from 'entities/Movie/model/slice/MovieDetailsSlice';
import {
    ReducerList,
    DynamicModuleLoader,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Fragment, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchMovieDetails } from 'entities/Movie/model/services/fetchMovieById/fetchMovieById';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    getMovieDetailsIsLoading,
    getMovieDetailsData,
    getMovieDetailsError,
} from 'entities/Movie/model/selectors/getMovieDetails';
import { MovieBackgroundBlock } from '../MovieBackgroundBlock/MovieBackgroundBlock';
import { MovieImageBlock } from '../MovieImageBlock/MovieImageBlock';
import { MovieTextBlock } from '../MovieTextBlock/MovieTextBlock';
import cls from './MovieDetails.module.scss';

interface MovieDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    movieDetails: MovieDetailsReducer,
};

export const MovieDetails = memo(({ className, id }: MovieDetailsProps) => {
    const isLoading = useSelector(getMovieDetailsIsLoading);
    const data = useSelector(getMovieDetailsData);
    const error = useSelector(getMovieDetailsError);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.poster}
                    width={400}
                    height={580}
                />
                <Skeleton
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                size={TextSize.M}
                title="Произошла ошибка при загрузке видео."
            />
        );
    } else {
        content = (
            <MovieBackgroundBlock url={data?.coverUrl}>
                <div className={cls.content}>
                    <MovieImageBlock
                        src={data?.posterUrl}
                        alt={data?.nameOriginal}
                    />
                    <MovieTextBlock data={data} />
                </div>
            </MovieBackgroundBlock>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(cls.MovieDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
