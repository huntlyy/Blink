import { createSlice } from '@reduxjs/toolkit';
import { FilmPageSchema } from '../types/types';
import { CatalogList } from 'entities/Film/model/types/Film';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: FilmPageSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    hasMore: true,
    limit: null,
    page: 1,
};

const FilmPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<CatalogList>) {
            state.data = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },

        reset: (state) => ({ ...initialState }),
    },
    extraReducers: (builder) => {},
});

export const { reducer: FilmPageReducer, actions: FilmPageActions } =
    FilmPageSlice;
