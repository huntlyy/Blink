import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ItemMovie } from 'entities/Movie';
import { PayloadAction } from '@reduxjs/toolkit';
import { MainPageSchema } from '../types/MainPageSchema';
import { fetchMovies } from '../services/fetchMovies/fetchMovies';
import { StateSchema } from 'app/providers/StoreProvider';

const moviesAdapter = createEntityAdapter<ItemMovie>({
    selectId: (movie) => movie.kinopoiskId || `${movie.nameRu}_${movie.year}`
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
                    moviesAdapter.addMany(state, action.payload)
                    state.hasMore = action.payload.length > 0;
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
