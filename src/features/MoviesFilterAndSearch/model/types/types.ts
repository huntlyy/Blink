import {
    FilmOrder,
    FilmTypes,
    FilmParams,
} from 'entities/Film/model/types/Film';

export enum URLParams {
    order = 'order',
    type = 'type',
    genre = 'genre',
    country = 'country',
    keyword = 'keyword',
}

export interface FilmURLParams {
    order?: FilmOrder | string;
    type?: FilmTypes | string;
    genre?: number;
    country?: number;
    keyword?: string;
}

export interface MoviesSchema extends Omit<FilmParams, 'page'> {
    URLParamsIsInstalled: boolean;
}
