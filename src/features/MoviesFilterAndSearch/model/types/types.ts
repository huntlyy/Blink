import {
    catalogOrderTypes,
    catalogTypeTypes,
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
    order?: catalogOrderTypes | string;
    type?: catalogTypeTypes | string;
    genre?: number;
    country?: number;
    keyword?: string;
}

export interface CatalogMoviesSchema extends Omit<CatalogParams, 'page'> {
    URLParamsIsInstalled: boolean;
}
