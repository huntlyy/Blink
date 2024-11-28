import { ItemMovie } from 'entities/Movie';
import { Suspense, memo, useEffect } from 'react';
import {
    DynamicModuleLoader,
    ReducerList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { MovieItemList } from 'entities/Movie/ui/MovieItemList/MovieItemList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { fetchMovies } from '../model/services/fetchMovies';
import {
    getMainPageError,
    getMainPageIsLoading,
} from '../model/selectors/getMainPage';
import { getMovies, mainPageReducer } from '../model/slice/MainPageSlice';

interface MainPageProps {
    className?: string;
}

const reducers: ReducerList = {
    movieCatalog: mainPageReducer,
};

const MainPage = (props: MainPageProps) => {
    const { className } = props;
    const data = useSelector(getMovies.selectAll);
    const isLoading = useSelector(getMainPageIsLoading);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            fetchMovies({
                page: 3,
            }),
        );
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={reducers}
        >
            <div className={classNames('', {}, [className])}>
                <Suspense fallback={<PageLoader />}>
                    <MovieItemList
                        data={data}
                        isLoading={isLoading}
                    />
                </Suspense>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(MainPage);
