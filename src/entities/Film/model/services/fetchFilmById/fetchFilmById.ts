import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Film } from '../../types/Film';

export const fetchFilmById = createAsyncThunk<
    Film,
    string,
    ThunkConfig<string>
>('FilmDetails/fetchFilmById', async (filmId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Film>(`/v2.2/films/${filmId}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue(e);
    }
});
