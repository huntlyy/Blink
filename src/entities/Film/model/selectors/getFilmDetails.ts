import { StateSchema } from "app/providers/StoreProvider";

export const getFilmDetailsData= (state: StateSchema) => state.FilmDetails.data
export const getFilmDetailsIsLoading = (state:StateSchema) => state.FilmDetails.isLoading
export const getFilmDetailsError = (state: StateSchema) => state.FilmDetails.error