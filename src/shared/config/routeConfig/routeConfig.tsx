import { RouteProps } from 'react-router-dom';
import MainPage from 'pages/MainPage/ui/MainPage';
import NotFoundPage from 'pages/NotFoundPage/ui/NotFoundPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/ui/MovieDetailsPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found',
    MOVIE_DETAILS = 'movie_details',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.MOVIE_DETAILS]: '/movie/', // + id movie

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
    [AppRoutes.MOVIE_DETAILS]: {
        path: `${RoutePath.movie_details}:id`,
        element: <MovieDetailsPage />,
    },
};
