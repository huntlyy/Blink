import { StateSchema } from 'app/providers/StoreProvider';

export const getTypesMovies = (state: StateSchema) =>
    state.catalogMovies.URLParamsIsInstalled;
export const getCountriesMovies = (state: StateSchema) =>
    state.catalogMovies.countries;
export const getSortStateMovies = (state: StateSchema) =>
    state.catalogMovies.order;
export const getTypeStateMovies = (state: StateSchema) =>
    state.catalogMovies.type;
export const getKeywordStateMovies = (state: StateSchema) =>
    state.catalogMovies.keyword;
