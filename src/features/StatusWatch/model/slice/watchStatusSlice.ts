import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { WatchStatusSchema } from '../types/types';
import { WatchStatus } from './../types/types';

const initialState: WatchStatusSchema = {
    status: null,
    error: undefined,
    isLoading: true,
};

export const watchStatusSlice = createSlice({
    name: 'watchStatus',
    initialState,
    reducers: {
        reset: () => {
            return { ...initialState };
        },
    },
    extraReducers: (builder) => {},
});

export const { actions: watchStatusAction } = watchStatusSlice;
export const { reducer: WatchStatusReducer } = watchStatusSlice;
