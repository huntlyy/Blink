import { StateSchema } from 'app/providers/StoreProvider';

export const getMainPageIsLoading = (state: StateSchema) =>
    state.movieCatalog?.isLoading || undefined;
export const getMainPageError = (state: StateSchema) =>
    state.movieCatalog?.error;
export const getMainPageNum = (state: StateSchema) =>
    state.movieCatalog?.page || 1;
export const getMainPageLimit = (state: StateSchema) =>
    state.movieCatalog?.limit || 9;
export const getMainPageHasMore = (state: StateSchema) =>
    state.movieCatalog?.hasMore;
