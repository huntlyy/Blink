import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieDetailsSchema } from '../types/MovieDetailsSchema';
import { fetchMovieDetails } from '../services/fetchMovieById/fetchMovieById';
import { Movie } from '../types/types';

const initialState: MovieDetailsSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

const MovieDetailsSlice = createSlice({
    name: 'MovieDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDetails.pending, (state) => {
                state.isLoading = true;
                state.data = undefined;
            })
            .addCase(
                fetchMovieDetails.fulfilled,
                (state, action: PayloadAction<Movie>) => {
                    state.data = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(fetchMovieDetails.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: MovieDetailsActions } = MovieDetailsSlice;
export const { reducer: MovieDetailsReducer } = MovieDetailsSlice;
