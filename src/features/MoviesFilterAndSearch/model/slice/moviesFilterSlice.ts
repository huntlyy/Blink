import {
    catalogOrderTypes,
    catalogTypeTypes,
} from 'shared/api/kinopoisk/models';
import { CatalogMoviesSchema, catalogURLParams } from '../types/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const catalogMovieDefaultOrder = catalogOrderTypes.NUM_VOTE;
export const catalogMovieDefaultType = catalogTypeTypes.ALL;

const initialState: CatalogMoviesSchema = {
    order: catalogMovieDefaultOrder,
    type: catalogMovieDefaultType,
    URLParamsIsInstalled: false,
};

export const moviesFilterSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setParams: (state, action: PayloadAction<catalogURLParams>) => {
            const { type, keyword, order, genre, country } = action.payload;
        },
    },
});
