import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieCardSchema } from '../types/MovieCardSchema';
import { fetchMovieCardItem } from '../services/fetchMovieCardItem';
import { MovieCard } from '../types/types';

const initialState: MovieCardSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

const MovieCardSlice = createSlice({
    name: 'MovieCard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieCardItem.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchMovieCardItem.fulfilled,
                (state, action: PayloadAction<MovieCard>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.error = undefined;
                },
            )
            .addCase(
                fetchMovieCardItem.rejected,
                (state, action: PayloadAction<string>) => {
                    state.error = action.payload;
                    state.data = undefined;
                },
            );
    },
});

export const { actions: MovieCardAction } = MovieCardSlice;
export const { reducer: MovieCardReducer } = MovieCardSlice;
