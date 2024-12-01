import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getMainPageHasMore,
    getMainPageIsLoading,
    getMainPageNum,
} from '../../selectors/getMainPage'
import { mainPageActions } from '../../slice/MainPageSlice'
import {fetchMovies} from '../fetchMovies/fetchMovies'

export const fetchNextMoviesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'MainPage/fetchNextMoviesPage',
        async (_, thunkApi) => {
            const { getState, dispatch } = thunkApi;
            const hasMore = getMainPageHasMore(getState());
            const page = getMainPageNum(getState());
            const isLoading = getMainPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(mainPageActions.setPage(page + 1));
                dispatch(fetchMovies({
                    page: page + 1,
                }));
            }
        },
    );
