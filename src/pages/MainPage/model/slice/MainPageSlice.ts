import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ItemMovie } from 'entities/Movie';
import { PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { MovieCatalog } from 'entities/Movie/model/types/types';
import { MainPageSchema } from '../types/MainPageSchema';
import { fetchMovies } from '../services/fetchMovies/fetchMovies';

const moviesAdapter = createEntityAdapter<ItemMovie>({
    selectId: (movie) => movie.kinopoiskId || `${movie.year}_${movie.nameEn}`,
})

export const getMovies = moviesAdapter.getSelectors<StateSchema>(
    (state) => state.movieCatalog || moviesAdapter.getInitialState(),
);

const mainPageSlice = createSlice({
    name: 'moviePageSlice',
    initialState: moviesAdapter.getInitialState<MainPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        page: 1,
        hasMore: true,
        total: null,
        totalPages: null,
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
                (state, action: PayloadAction<MovieCatalog>) => {
                    state.isLoading = false;
                    const movies = action.payload.items;
                    console.log(action.payload);
                    moviesAdapter.addMany(state, movies);
                    state.hasMore = action.payload.items.length > 0;
                    state.total = action.payload.total;
                    state.totalPages = action.payload.totalPages;
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
