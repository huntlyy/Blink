import { classNames } from 'shared/lib/classNames/classNames';
import { ScoreRating } from '../lib/ScoreRating';
import { Score } from '../types/types';
import cls from './RatingMovie.module.scss';

interface RatingMovieProps {
    className?: string;
    rating: number;
}

export const RatingMovie = (props: RatingMovieProps) => {
    const { className, rating } = props;

    const ratingCategory = ScoreRating(rating) || Score.EMPTY;

    return (
        <b
            className={classNames(cls.RatingMovie, {}, [
                cls[ratingCategory],
                className,
            ])}
        >
            {rating || '??'}
        </b>
    );
};
