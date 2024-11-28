import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ItemMovie } from 'entities/Movie';
import { PayloadAction } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types/MainPageSchema';
import { fetchMovies } from '../services/fetchMovies';

const movieAdapter = createEntityAdapter<ItemMovie>({
    selectId: (movie) => movie.kinopoiskId,
});

export const getMovies = movieAdapter.getSelectors<StateSchema>(
    (state) => state.movieCatalog || movieAdapter.getInitialState(),
);

const mainPageSlice = createSlice({
    name: 'moviePageSlice',
    initialState: movieAdapter.getInitialState<MainPageSchema>({
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: true,
        ids: [],
        entities: {},
    }),
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchMovies.fulfilled,
                (state, action: PayloadAction<ItemMovie[]>) => {
                    state.isLoading = false;
                    movieAdapter.setAll(state, action.payload);
                },
            )
            .addCase(
                fetchMovies.rejected,
                (state, action: PayloadAction<string>) => {
                    state.isLoading = false;
                    state.error = action.payload;
                },
            );
    },
});

export const { reducer: mainPageReducer, actions: mainPageActions } =
    mainPageSlice;
