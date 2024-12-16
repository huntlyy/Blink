export type Genre = { genre: string };
export type Country = { country: string };

export type GenresList = Genre[];
export type CountriesList = Country[];

export enum MovieOrder {
    RATING = 'RATING',
    NUM_VOTE = 'NUM_VOTE',
    YEAR = 'YEAR',
}

export enum MovieTypes {
    FILM = 'FILM',
    TV_SHOW = 'TV_SHOW',
    TV_SERIES = 'TV_SERIES',
    MINI_SERIES = 'MINI_SERIES',
    ALL = 'ALL',
}

export const MovieType: Record<MovieTypes, string> = {
    [MovieTypes.FILM]: 'Фильм',
    [MovieTypes.TV_SHOW]: 'ТВ-шоу',
    [MovieTypes.TV_SERIES]: 'ТВ-сериал',
    [MovieTypes.MINI_SERIES]: 'Мини-сериал',
    [MovieTypes.ALL]: 'Все',
};

export interface Movie {
    nameRu?: string;
    nameEn?: string;
    nameOriginal?: string;
    posterUrl?: string;
    posterUrlPreview?: string;
    description?: string;
    ratingAgeLimits?: string;
    kinopoiskId?: number | string;
    coverUrl?: string | null;
    logoUrl?: string | null;
    ratingKinopoisk?: number;
    webUrl?: string;
    year?: number;
    filmLength?: number;
    slogan?: string;
    shortDescription?: string;
    type?: MovieTypes;
    genres?: GenresList;
    countries?: CountriesList;
    startYear?: number | null;
    endYear?: number | null;
    completed?: boolean;
}

export interface ItemMovie {
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrlPreview: string;
    posterUrl: string;
    ratingKinopoisk: number;
    kinopoiskId: number | string;
    year: number;
    genres: GenresList;
    countries: CountriesList;
}

export interface MovieCatalog {
    items: ItemMovie[];
    total: number;
    totalPages: number;
}
