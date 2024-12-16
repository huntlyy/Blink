import { EntityState } from '@reduxjs/toolkit';
import { ItemMovie } from 'entities/Movie';

export interface MainPageSchema extends EntityState<ItemMovie> {
    isLoading?: boolean;
    error?: string;

    //pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    total: null | number;
    totalPages: null | number;
}
