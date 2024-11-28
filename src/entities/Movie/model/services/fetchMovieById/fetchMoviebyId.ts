import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Movie } from '../../types/types';

export const fetchMovieDetails = createAsyncThunk<
    Movie,
    string,
    ThunkConfig<string>
>('MovieDetails/fetchMovieDetails', async (kinopoiskId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.get<Movie>(
            `/v2.2/films/${kinopoiskId}`,
        );

        if (!response.data) {
            throw new Error();
        }

        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
