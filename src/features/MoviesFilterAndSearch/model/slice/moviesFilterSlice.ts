import {
    CatalogOrderTypes,
    CatalogTypeTypes,
} from 'entities/Film/model/types/Film';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CatalogMoviesSchema, catalogURLParams } from '../types/types';

export const catalogMovieDefaultOrder = CatalogOrderTypes.NUM_VOTE;
export const catalogMovieDefaultType = CatalogTypeTypes.ALL;

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

export const { actions: moviesFilterAction } = moviesFilterSlice;
export const { reducer: moviesFilterReducer } = moviesFilterSlice;
