import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import FilmPage from 'pages/FilmsPage/FilmsPage';

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    FILM = 'film'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FILM]: '/film',

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
    [AppRoutes.FILM]: {
        path: RoutePath.film,
        element: <FilmPage />
    }
};
