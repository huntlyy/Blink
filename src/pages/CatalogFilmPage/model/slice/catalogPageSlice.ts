import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CatalogList } from 'shared/api/kinopoisk/models';
import { CatalogFilmPageSchema } from '../types/CatalogFilmPageSchema';
import { fetchCatalogFilm } from '../services/fetchCatalogFilm';

const initialState: CatalogFilmPageSchema = {
    isLoading: false,
    items: [] || null,
    page: 1,
    totalItems: null,
    totalPages: null,
};

const catalogPageSlice = createSlice({
    name: 'catalogPageSlice',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<CatalogList>) => {
            state.items = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        reset: () => ({ ...initialState }),
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogFilm.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchCatalogFilm.fulfilled, (state, action) => {
                state.isLoading = false;
                const { data, loadMore } = action.payload;
                state.totalPages = data.totalPages;
                state.totalItems = data.total;

                if (loadMore) {
                    state.items = [...state.items, ...data.items];
                } else {
                    state.items = data.items;
                }
            })
            .addCase(fetchCatalogFilm.rejected, (state, action) => {
                state.error = action.payload as string;
                state.isLoading = false;
            });
    },
});

export const { reducer: catalogReducer, actions: catalogActions } =
    catalogPageSlice;
