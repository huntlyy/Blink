import { StateSchema } from "app/providers/StoreProvider";

export const getFilmPageData = (state: StateSchema) => state.filmsPage?.data
export const getFilmPageIsLoading = (state: StateSchema) => state.filmsPage?.isLoading || false
export const getFilmPageError = (state: StateSchema) => state.filmsPage?.error
export const getFilmPageNum = (state: StateSchema) => state.filmsPage?.page || 1
export const getFilmPageLimit = (state: StateSchema) => state.filmsPage?.limit || 9
export const getFilmPageHasMore = (state: StateSchema) => state.filmsPage?.hasMore