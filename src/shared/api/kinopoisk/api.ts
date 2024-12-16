import axios from 'axios';

export const $kinopoisk = axios.create({
    baseURL: process.env.KINO_API_URL,
    headers: {
        'Content-type': 'application/json',
        'X-API-KEY': process.env.KINO_API_KEY,
    },
});
