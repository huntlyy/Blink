export enum WatchStatus {
    FAVORITE = 'Любимое',
    PLANS = 'В планах',
    WATCHING = 'Смотрю',
    VIEWED = 'Просмотрено',
    POSTPONED = 'Отложено',
    ABANDONED = 'Брошено',
}

export interface WatchStatusSchema {
    status: WatchStatus | null;
    isLoading?: boolean;
    error?: string | undefined;
}

export interface filmData {
    id: string | number;
    name: string;
    year: number;
    postUrl: string;
    rating: number;
    status?: WatchStatusSchema;
}
