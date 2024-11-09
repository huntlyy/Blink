import { StateSchema } from "app/providers/StoreProvider";

export const getTypesMovies = (state: StateSchema) => state.catalogMovies.URLParamsIsInstalled
export const getCountriesMovies = (state: StateSchema) => state.catalogMovies.countries
export const getSortState = (state:StateSchema) => state.catalogMovies.order;
export const getTypeState = (state:StateSchema) => state.catalogMovies.type;
export const getKeywordState = (state:StateSchema) => state.catalogMovies.keyword;

