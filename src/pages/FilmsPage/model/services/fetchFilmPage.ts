import { createAsyncThunk } from '@reduxjs/toolkit';
import { Film } from 'entities/Film';
import {
    ThunkConfig,
    ThunkExtraArg,
} from 'app/providers/StoreProvider/config/StateSchema';

export const FetchCatalog = createAsyncThunk<
    Film,
    ThunkExtraArg,
    ThunkConfig<string>
>('catalogPageSlice/fetchCatalog', async (params, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    try {
        const response = await extra.api.get(`/v2.2/films`);
        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (error) {
        return rejectWithValue(`Ошибка загрузки: ${error.message}`);
    }
});
