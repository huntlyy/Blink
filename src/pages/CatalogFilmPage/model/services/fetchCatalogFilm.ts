import { createAsyncThunk } from "@reduxjs/toolkit";
import { kinopoiskApi } from "shared/api";
import { CatalogParams } from 'shared/api/kinopoisk/models';

interface fetchCatalogProps {
    params: CatalogParams;
    loadMore?: boolean;
  }

export const fetchCatalogFilm = createAsyncThunk('catalogPageSlice/fetchCatalogFilm', async (props: fetchCatalogProps, thunkApi) => {
    const {rejectWithValue} = thunkApi
    const {params, loadMore = false} = props

    try {

        const response = await kinopoiskApi.api.$getCatalog(params)

        if (!response.data) {
             throw new Error()
        }

        return {
            data: response.data,
            loadMore
        }

    } catch (e) {
        return rejectWithValue(e)
    }
} )