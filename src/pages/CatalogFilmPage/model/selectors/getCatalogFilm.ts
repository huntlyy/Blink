import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalogFilmError = (state: StateSchema) => state.catalog.error;
export const getCatalogFilmIsLoading = (state: StateSchema) =>
    state.catalog.isLoading;
export const getCatalogFilmData = (state: StateSchema) => state.catalog.items;
export const getCatalogState = (state: StateSchema) => state.catalog;
export const getCatalogPage = (state: StateSchema) => state.catalog.page;
export const getCatalogTotalPages = (state: StateSchema) =>
    state.catalog.totalPages;
