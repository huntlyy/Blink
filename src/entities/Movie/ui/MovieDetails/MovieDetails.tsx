import { MovieDetailsReducer } from "entities/Movie/model/slice/MovieDetailsSlice";
import { ReducerList, DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { memo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchMovieDetails } from "entities/Movie/model/services/fetchMovieById/fetchMovieById";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { classNames } from "shared/lib/classNames/classNames";
import { MovieImageBlock } from "../MovieImageBlock/MovieImageBlock";
import { getMovieDetailsIsLoading, getMovieDetailsData, getMovieDetailsError } from "entities/Movie/model/selectors/getMovieDetails";
import cls from './MovieDetails.module.scss'
import { MovieBackgroundBlock } from "../MovieBackgroundBlock/MovieBackgroundBlock";

interface MovieDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducerList = {
    movieDetails: MovieDetailsReducer
};

export const MovieDetails = memo((props: MovieDetailsProps) => {
    const { className, id } = props;

    const isLoading = useSelector(getMovieDetailsIsLoading);
    const data = useSelector(getMovieDetailsData);
    const error = useSelector(getMovieDetailsError);
    const dispatch = useAppDispatch();

    // const renderBlock = useCallback((block: ArticleBlock) => {
    //     switch (block.type) {
    //     case ArticleBlockType.CODE:
    //         return (
    //             <ArticleCodeBlockComponent
    //                 key={block.id}
    //                 block={block}
    //                 className={cls.block}
    //             />
    //         );
    //     case ArticleBlockType.IMAGE:
    //         return (
    //             <ArticleImageBlockComponent
    //                 key={block.id}
    //                 block={block}
    //                 className={cls.block}
    //             />
    //         );
    //     case ArticleBlockType.TEXT:
    //         return (
    //             <ArticleTextBlockComponent
    //                 key={block.id}
    //                 className={cls.block}
    //                 block={block}
    //             />
    //         );
    //     default:
    //         return null;
    //     }
    // }, []);

    useEffect(() => {
            dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                size={TextSize.M}
                title={'Произошла ошибка при загрузке видео.'}
            />
        );
    } else {
        content = (
            <>
            // <MovieBackgroundBlock url={data?.webUrl}>
                <div className={cls.imageWrapper}>
                    <MovieImageBlock
                    alt={`Постер для фильма ${data?.nameRu}`}
                        src={data?.posterUrl}
                        className={cls.image}
                    />
                </div>
                <Text
                    className={cls.title}
                    title={data?.nameRu}
                    text={data?.nameEn}
                    size={TextSize.M}
                />
                <div className={cls.MovieInfo}>
                    <Text text={`Год: ${data?.year}`} />
                    <Text text={`Время: ${data?.filmLength}`} />
                    <Text text={`Слоган: ${data?.slogan}`} />
                    <Text text={`Возраст: ${data?.ratingAgeLimits}`}/>
                    <Text text={`Рейтинг: ${data?.ratingKinopoisk}`} />
                </div>
                
                {/* {article?.blocks.map(renderBlock)} */}
            // </MovieBackgroundBlock>
        </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
