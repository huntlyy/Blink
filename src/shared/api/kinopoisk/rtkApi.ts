import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    reducerPath: 'rtkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.KINO_API_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
