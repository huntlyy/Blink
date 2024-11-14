import { EntityState } from '@reduxjs/toolkit';
import { CatalogList, Film } from 'entities/Film/model/types/Film';

export interface FilmPageSchema {
    isLoading: boolean;
    error: string;
    data: CatalogList;

    //pagination
    page: number;

    limit?: number;
    hasMore: boolean;
}
