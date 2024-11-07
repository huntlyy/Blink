import { Score } from '../types/types';

const EMPTY_THRESHOLD = 7.5;
const MEDIUM_THRESHOLD = 4;

export const ScoreRating = (rating?: number | null): Score => {
    switch (true) {
        case rating == null:
            return Score.EMPTY;
        case rating >= EMPTY_THRESHOLD:
            return Score.GREAT;
        case rating >= MEDIUM_THRESHOLD:
            return Score.MEDIUM;
        case rating < MEDIUM_THRESHOLD:
            return Score.BAD;
        default:
            return Score.EMPTY;
    }
};
