import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieCard } from '../types/types';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchMovieCardItem = createAsyncThunk<
    MovieCard,
    void,
    ThunkConfig<string>
>('fetchMovieCardItem/MovieCard', async (kinopoiskId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.get(`v2.2/films/${kinopoiskId}`);

        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (e) {
        rejectWithValue(e);
    }
});
