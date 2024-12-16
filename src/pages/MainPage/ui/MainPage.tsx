import { memo, useCallback, useEffect } from 'react';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { MovieItemList } from 'entities/Movie/ui/MovieItemList/MovieItemList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'shared/ui/Page/Page';
import { fetchMovies } from '../model/services/fetchMovies/fetchMovies';
import {
    getMainPageIsLoading,
} from '../model/selectors/getMainPage';
import { getMovies, mainPageReducer } from '../model/slice/MainPageSlice';
import { fetchNextMoviesPage } from '../model/services/fetchNextMoviesPage/fetchNextMoviesPage';

interface MainPageProps {
    className?: string;
}

const reducers: ReducerList = {
    movieCatalog: mainPageReducer,
};

const MainPage = (props: MainPageProps) => {
    const { className } = props;
const data = Object.values(useSelector(getMovies.selectEntities));
    const isLoading = useSelector(getMainPageIsLoading);
    const dispatch = useAppDispatch();

    const onLoadNextPage = useCallback(() => {
       dispatch(fetchNextMoviesPage())
    }, [dispatch])

    useEffect(() => {
        dispatch(
            fetchMovies({
                page: 1
            }),
        );
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={reducers}
        >
            <Page onScrollEnd={onLoadNextPage} className={classNames('', {}, [className])}>
                    <MovieItemList
                        data={data}
                        isLoading={isLoading}
                    />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(MainPage);
