import { ItemMovie } from 'entities/Movie';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getMovies, mainPageReducer } from '../model/slice/MainPageSlice';
import { classNames } from 'shared/lib/classNames/classNames';
import { MovieItemList } from 'entities/Movie/ui/MovieItemList/MovieItemList';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchMovies } from '../model/services/fetchMovies';
import { useSelector } from 'react-redux';
import { getMainPageError, getMainPageIsLoading } from '../model/selectors/getMainPage';

interface MainPageProps {
    className?: string
}

const reducers: ReducerList = {
    movieCatalog: mainPageReducer
}

const MainPage = (props: MainPageProps) => {

    const {className} = props
    const data = useSelector(getMovies.selectAll)
    const isLoading = useSelector(getMainPageIsLoading)
    const error = useSelector(getMainPageError)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    return <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
        <div className={classNames('', {}, [className])}>
            <MovieItemList data={data} isLoading={isLoading} />
        </div>
    </DynamicModuleLoader>;
};

export default memo(MainPage);
