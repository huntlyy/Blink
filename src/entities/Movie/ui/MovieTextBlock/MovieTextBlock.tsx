import { Movie } from 'entities/Movie/model/types/types';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { RatingMovie } from 'shared/ui/RatingMovie/ui/RatingMovie';

interface MovieTextBlockProps {
    className?: string;
    data: Movie;
}
export const MovieTextBlock = (props: MovieTextBlockProps) => {
    const { data, className } = props;

    const movieGenres =
        data?.genres.map((item) => item.genre).join(', ') || 'Неизвестно';
    const movieCountries =
        data?.countries.map((item) => item.country).join(', ') || 'Неизвестно';

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                title={data?.nameRu}
                text={data?.nameEn}
                size={TextSize.M}
            />
            <Text text={`Год: ${data?.year || 'Неизвестно'}`} />
            <Text text={`Страны: ${movieCountries}`} />
            <Text text={`Жанры: ${movieGenres}`} />
            <Text text={`Время: ${data?.filmLength || 'Не указано'}`} />
            <Text text={`Слоган: ${data?.slogan || 'Нет слогана'}`} />
            <Text
                text={`Возраст: ${(data?.ratingAgeLimits && data?.ratingAgeLimits.replace('age', '+')) || 'Не указано'}`}
            />
            <RatingMovie rating={data?.ratingKinopoisk} />
            <Text text={`Тип: ${data?.type}`} />
        </div>
    );
};
