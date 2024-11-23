import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import CatalogMoviePage from 'pages/CatalogMoviePage/ui/CatalogMoviePage';

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    MOVIE = 'movie'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.MOVIE]: '/movie/', // + id

    //последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
    [AppRoutes.MOVIE]: {
        path: `${RoutePath.movie}:id`,
        element: <CatalogMoviePage />
    }
};
