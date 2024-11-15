export type ListItem<T> = T[]; 

export interface Genre {
    genre: string;
}

export interface Country {
    country: string;
}

export type GenresList = ListItem<Genre>; 
export type CountriesList = ListItem<Country>; 


export interface PaginatedResponse<T> {
    total: number;
    totalPages: number;
    items: T[];
}

export interface CatalogItem {
    nameRu: string;
    posterUrlPreview: string;
    posterUrl: string;
    ratingKinopoisk: number;
    kinopoiskId: number;
    year: number;
    genres: GenresList;
    countries: CountriesList;
}

export type CatalogList = CatalogItem[];

export type GetCatalogListResponse = PaginatedResponse<CatalogItem>;

export enum CatalogOrderTypes {
    RATING = 'RATING',
    NUM_VOTE = 'NUM_VOTE',
    YEAR = 'YEAR',
}

export enum CatalogTypeTypes {
    FILM = 'FILM',
    TV_SHOW = 'TV_SHOW',
    TV_SERIES = 'TV_SERIES',
    MINI_SERIES = 'MINI_SERIES',
    ALL = 'ALL',
}

export const CatalogOrderOptions: Record<CatalogOrderTypes, string> = {
    [CatalogOrderTypes.NUM_VOTE]: 'Количество голосов',
    [CatalogOrderTypes.RATING]: 'Рейтинг',
    [CatalogOrderTypes.YEAR]: 'Год',
};

export const CatalogTypeOptions: Record<CatalogTypeTypes, string> = {
    [CatalogTypeTypes.ALL]: 'Все',
    [CatalogTypeTypes.FILM]: 'Фильмы',
    [CatalogTypeTypes.TV_SERIES]: 'ТV-сериалы',
    [CatalogTypeTypes.TV_SHOW]: 'ТV-шоу',
    [CatalogTypeTypes.MINI_SERIES]: 'Мини-сериалы',
};

export interface CatalogParams {
    countries?: number[];
    genres?: number[];
    order?: CatalogOrderTypes;
    type?: CatalogTypeTypes;
    ratingFrom?: number;
    ratingTo?: number;
    yearFrom?: number;
    yearTo?: number;
    keyword?: string;
    page?: number;
}

export interface Film extends Omit<CatalogItem, 'nameRu'> {
    nameRu?: string;
    nameEn?: string;
    nameOriginal?: string;
    description?: string;
    ratingAgeLimits?: string;
    coverUrl?: string | null;
    logoUrl?: string | null;
    webUrl?: string;
    filmLength?: number;
    slogan?: string;
    shortDescription?: string;
    type?: CatalogTypeTypes;
    startYear?: number | null;
    endYear?: number | null;
    completed?: boolean;
}

export const FilmType: Record<CatalogTypeTypes, string> = CatalogTypeOptions;

export interface FilmBudgetItem {
    type: string;
    amount: number;
    currencyCode: string;
    name: string;
    symbol: string;
}
export type FilmBudget = PaginatedResponse<FilmBudgetItem>;

export interface FilmImageItem {
    imageUrl: string;
    previewUrl: string;
}
export type FilmImages = PaginatedResponse<FilmImageItem>;

export enum FilmFactItemType {
    FACT = 'FACT',
    BLOOPER = 'BLOOPER',
}

export interface FilmFactItem {
    text: string;
    type: FilmFactItemType;
    spoiler: boolean;
}
export type FilmFacts = PaginatedResponse<FilmFactItem>;

export enum TeamProfession {
    DIRECTOR = 'Режиссер',
    DESIGN = 'Художник',
    EDITOR = 'Монтажер',
    WRITER = 'Сценарист',
    VOICE_DIRECTOR = 'Режиссер дубляжа',
    COMPOSER = 'Композитор',
    OPERATOR = 'Оператор',
    PRODUCER = 'Продюсер',
    ACTOR = 'Актер',
    HIMSELF = 'Играет самого себя',
    HERSELF = 'Играет саму себя',
    HRONO_TITR_MALE = 'Мужской голос за кадром',
    HRONO_TITR_FEMALE = 'Женский голос за кадром',
    VOICE_MALE = 'Актер озвучки',
    VOICE_FEMALE = 'Актриса озвучки',
}

export interface FilmTeamItem {
    staffId: number;
    nameEn: string;
    nameRu: string;
    description?: string | null;
    posterUrl: string;
    professionText: string;
    professionKey: TeamProfession;
}
export type FilmTeam = FilmTeamItem[];

export interface Spouse {
    personId: number;
    name: string;
    divorced: boolean;
    divorcedReason: string;
    sex: string;
    children: number;
    webUrl: string;
    relation: string;
}

export interface PersonFilmTypes {
    filmId: number;
    nameRu: string;
    nameEn: string;
    rating?: number | null;
    general: boolean;
    description: string;
    professionKey: string;
}

export interface Person {
    personId?: number;
    webUrl?: string;
    nameRu?: string | null;
    nameEn?: string | null;
    sex?: string;
    posterUrl?: string;
    growth?: number;
    birthday?: string;
    death?: string | null;
    age?: number;
    birthplace?: string;
    deathplace?: string | null;
    spouses?: Spouse[];
    hasAwards?: number;
    profession?: string;
    facts?: string[];
    films?: PersonFilmTypes[];
}
