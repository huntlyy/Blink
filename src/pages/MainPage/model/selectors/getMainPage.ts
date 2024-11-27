import { StateSchema } from "app/providers/StoreProvider";

export const getMainPageIsLoading = (state: StateSchema) => state.movieCatalog?.isLoading || undefined
export const getMainPageError = (state: StateSchema) => state.movieCatalog?.error