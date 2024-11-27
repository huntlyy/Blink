import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { ItemMovie } from "entities/Movie";

export const fetchMovies = createAsyncThunk<ItemMovie[], void, ThunkConfig<string>>('MainPage/fetchMovies', async (_, thunkApi) => {
    const {rejectWithValue, extra} = thunkApi

    try {

        const response = await extra.api.get('v2.2/films')

        if (!response.data) {
            throw new Error()
        }

        return response.data
        
    } catch (e) {
        return rejectWithValue(e)
    }
})