import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemMovie} from '../../types/types';
import { ThunkConfig } from 'app/providers/StoreProvider';

export const fetchMovies = createAsyncThunk<
    ItemMovie,
    void,
    ThunkConfig<string>
>('MainPage/fetchMovies', async (_, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.get<ItemMovie>(
            `/v2.2/films/`,
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
