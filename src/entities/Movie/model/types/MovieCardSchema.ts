import { MovieCard } from './types';

export interface MovieCardSchema {
    isLoading?: boolean;
    error?: string;
    data?: MovieCard;
}
