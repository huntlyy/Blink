import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FilmDetailsSchema } from 'entities/Film/model/types/FilmDetailsSchema';
import { UserSchema } from 'entities/User/models/types/user';
import { MoviesSchema } from 'features/MoviesFilterAndSearch/model/types/types';
import { WatchStatusSchema } from 'features/StatusWatch/model/types/types';
import { NavigateOptions, To } from 'react-router-dom';
import { rtkApi } from 'shared/api/kinopoisk/rtkApi';

export interface StateSchema {
    user: UserSchema;
    catalogMovies: MoviesSchema;
    watchStatus: WatchStatusSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    //async reducer
    FilmDetails?: FilmDetailsSchema;
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
