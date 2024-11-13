import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { rtkApi } from 'shared/api/kinopoisk/rtkApi';
import { $kinopoisk } from 'shared/api/kinopoisk/api';
import { catalogReducer } from 'pages/CatalogFilmPage/model/slice/catalogPageSlice';
import { userReducer } from 'entities/User';
import { WatchStatusReducer } from 'features/StatusWatch/model/slice/watchStatusSlice';
import { moviesFilterReducer } from 'features/MoviesFilterAndSearch/model/slice/moviesFilterSlice';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { FilmDetailsReducer } from 'entities/Film/model/slice/FilmDetailsSlice';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        catalog: catalogReducer,
        user: userReducer,
        catalogMovies: moviesFilterReducer,
        watchStatus: WatchStatusReducer,
        FilmDetails: FilmDetailsReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $kinopoisk,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
