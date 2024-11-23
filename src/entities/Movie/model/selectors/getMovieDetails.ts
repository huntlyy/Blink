import { StateSchema } from 'app/providers/StoreProvider';

export const getMovieData = (state: StateSchema) => state.movieDetails?.data;
export const getMovieError = (state: StateSchema) => state.movieDetails?.error;
export const getMovieIsLoading = (state: StateSchema) =>
    state.movieDetails.isLoading;
