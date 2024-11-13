import { Film } from './Film';

export interface FilmDetailsSchema {
    isLoading?: boolean;
    error?: string;
    data?: Film;
}
