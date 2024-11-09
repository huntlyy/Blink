import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { UserSchema } from 'entities/User/models/types/user';
import { CatalogMoviesSchema } from 'features/MoviesFilterAndSearch/model/types/types';
import { CatalogFilmPageSchema } from 'pages/CatalogFilmPage/model/types/CatalogFilmPageSchema';
import { NavigateOptions, To } from 'react-router-dom';
import { rtkApi } from 'shared/api/kinopoisk/rtkApi';

export interface StateSchema {
    catalog: CatalogFilmPageSchema;
    user: UserSchema;
    catalogMovies: CatalogMoviesSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    //Async reducers
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
