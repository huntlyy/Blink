import {
    CatalogOrderTypes,
    CatalogTypeTypes,
    CatalogParams,
} from 'entities/Film/model/types/Film';

export enum URLParams {
    order = 'order',
    type = 'type',
    genre = 'genre',
    country = 'country',
    keyword = 'keyword',
}

export interface catalogURLParams {
    order?: CatalogOrderTypes | string;
    type?: CatalogTypeTypes | string;
    genre?: number;
    country?: number;
    keyword?: string;
}

export interface CatalogMoviesSchema extends Omit<CatalogParams, 'page'> {
    URLParamsIsInstalled: boolean;
}
