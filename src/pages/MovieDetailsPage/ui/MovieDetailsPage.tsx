import { MovieDetails } from 'entities/Movie/ui/MovieDetails/MovieDetails';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MovieDetails.module.scss';

interface MovieDetailsPageProps {
    className?: string;
}

const MovieDetailsPage = (props: MovieDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(cls.MovieDetailsPage, {}, [className])}>
                {'Фильм не найден'}
            </div>
        );
    }

    return (
        <div className={classNames('', {}, [className])}>
            <MovieDetails id={id} />
        </div>
    );
};

export default memo(MovieDetailsPage);
