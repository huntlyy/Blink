import { Movie } from './types';

export interface MovieDetailsSchema {
    data?: Movie;
    isLoading?: boolean;
    error?: string;
}
