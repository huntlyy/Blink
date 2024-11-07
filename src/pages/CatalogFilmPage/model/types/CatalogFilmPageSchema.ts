import { CatalogList } from 'shared/api/kinopoisk/models';

export interface CatalogFilmPageSchema {
    isLoading?: boolean;
    error?: string | undefined;
    items: CatalogList;
    page: number;
    totalItems: number | null;
    totalPages: number | null;
}
