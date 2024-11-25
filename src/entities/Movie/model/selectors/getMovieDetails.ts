import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieDetailsData = (state: StateSchema) =>
    state.movieDetails?.data;
export const getMovieDetailsError = (state: StateSchema) =>
    state.movieDetails?.error;
export const getMovieDetailsIsLoading = (state: StateSchema) =>
    state.movieDetails?.isLoading || false;
