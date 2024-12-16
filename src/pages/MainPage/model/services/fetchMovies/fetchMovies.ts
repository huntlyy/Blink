import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { MovieCatalog } from 'entities/Movie/model/types/types';
import { getMainPageLimit } from '../../selectors/getMainPage';

interface fetchMoviesProps {
    page?: number;
}

export const fetchMovies = createAsyncThunk<
    MovieCatalog,
    fetchMoviesProps,
    ThunkConfig<string>
>('MainPage/fetchMovies', async (props, thunkApi) => {
    const { rejectWithValue, extra, getState } = thunkApi;
    const { page = 1 } = props;
    const limit = getMainPageLimit(getState());

    try {
        const response = await extra.api.get<MovieCatalog>('/v2.2/films', {
            params: {
                _limit: limit,
                _page: page,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        console.log(response.data)
        return response.data;

    } catch (e) {
        return rejectWithValue(e);
    }
});
