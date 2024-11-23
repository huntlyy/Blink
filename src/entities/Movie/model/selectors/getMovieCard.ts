import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieCardData = (state: StateSchema) =>
    state.movieCard?.data || undefined;
export const getMovieCardIsLoading = (state: StateSchema) =>
    state.movieCard?.isLoading;
export const getMovieCardError = (state: StateSchema) =>
    state.movieCard?.error || undefined;
