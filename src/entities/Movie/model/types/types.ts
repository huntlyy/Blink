//===============================================//

export interface MovieCard {
    kinopoiskId: number;
    nameRu: string;
    nameEn: string;
    posterUrlPreview: string;
    posterUrl: string;
    ratingKinopoisk: number;
    year: number;
    genres: GenresList;
    countries: CountriesList;
}

export type MovieList = MovieCard[];

export interface MovieListResponse {
    total: number;
    totalPage: number;
    items: MovieList;
}

//===============================================//

export enum MovieOrder {
    RATING = 'RATING',
    NUM_VOTE = 'NUM_VOTE',
    YEAR = 'VOTE',
}

export enum MovieTypes {
    FILM = 'FILM',
    TV_SHOW = 'TV_SHOW',
    TV_SERIES = 'TV_SERIES',
    MINI_SERIES = 'MINI_SERIES',
    ALL = 'ALL',
}

export const MovieOrderOptions: Record<MovieOrder, string> = {
    [MovieOrder.NUM_VOTE]: 'Количество голосов',
    [MovieOrder.RATING]: 'Рейтинг',
    [MovieOrder.YEAR]: 'Год',
};

export const MovieTypesOptions: Record<MovieTypes, string> = {
    [MovieTypes.ALL]: 'Все',
    [MovieTypes.FILM]: 'Фильмы',
    [MovieTypes.MINI_SERIES]: 'Мини-сериалы',
    [MovieTypes.TV_SERIES]: 'TV-сериалы',
    [MovieTypes.TV_SHOW]: 'TV-шоу',
};

export interface Genre {
    genre: string | null;
}

export interface Country {
    country: string | null;
}

export type GenresList = Array<Genre>;
export type CountriesList = Array<Country>;

export interface MovieParams {
    countries?: number[];
    genres?: number[];
    order?: MovieOrder;
    type?: MovieTypes;
    ratingFrom?: number;
    ratingTo?: number;
    yearFrom?: number;
    yearTo?: number;
    keyword?: string;
    page?: number;
}

export interface MovieItem {
    kinopoiskId?: number;
    nameRu?: string;
    nameEn?: string;
    nameOriginal?: string;
    posterUrl?: string;
    description?: string;
    ratingAgeLimits?: string;
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
    startYear?: number;
    endYear?: number;
    completed?: boolean;
}

//===============================================//

export interface MovieBudget {
    type: string;
    amount: number;
    currencyCode: string;
    name: string;
    symbol: string;
}

export interface MovieBudgetItem {
    total: number;
    totalPages: number;
    items: MovieBudget[];
}

//===============================================//

export interface MovieImage {
    imageUrl: string;
    previewUrl: string;
}

export interface MovieImages {
    total: number;
    totalPages: number;
    items: MovieImage[];
}

//===============================================//

export enum MovieFacts {
    BLOOPER = 'BLOOPER',
    FACT = 'FACT',
}

export interface MovieFact {
    text: string;
    facts: MovieFacts;
    spoiler: boolean;
}

export interface MovieFactItem {
    total: number;
    items: MovieFact[];
}

//===============================================//

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
    VOICE_FEMALE = 'Акриса озвучки',
}

export interface FilmTeamItem {
    staffId: number;
    nameEn: string;
    nameRu: string;
    description: null | string;
    posterUrl: string;
    professionText: string;
    professionKey: TeamProfession;
}

export type FilmTeam = FilmTeamItem[];

//===============================================//

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

export interface PersonInMovies {
    filmId: number;
    nameRu: string;
    nameEn: string;
    rating: string | number | null;
    general: boolean;
    description: string;
    professionKey: TeamProfession;
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
    profession?: TeamProfession[];
    facts?: MovieFactItem[];
    films?: PersonInMovies[];
}

//===============================================//
