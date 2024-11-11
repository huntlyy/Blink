import axios from 'axios';

export const $kinopoisk = axios.create({
    baseURL: process.env.KINOPOISK_API_URL,
    headers: {
        'Content-type': 'application/json',
        'X-API-KEY': process.env.KINOPOISK_API_KEY
    },
});
