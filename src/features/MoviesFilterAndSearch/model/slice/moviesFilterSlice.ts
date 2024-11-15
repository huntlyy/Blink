import { FilmOrder, FilmTypes } from 'entities/Film/model/types/Film';
import { createSlice } from '@reduxjs/toolkit';
import { MoviesSchema } from '../types/types';

export const catalogMovieDefaultOrder = FilmOrder.NUM_VOTE;
export const catalogMovieDefaultType = FilmTypes.ALL;

const initialState: MoviesSchema = {
    order: catalogMovieDefaultOrder,
    type: catalogMovieDefaultType,
    URLParamsIsInstalled: false,
};

export const moviesFilterSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
});

export const { actions: moviesFilterAction } = moviesFilterSlice;
export const { reducer: moviesFilterReducer } = moviesFilterSlice;
