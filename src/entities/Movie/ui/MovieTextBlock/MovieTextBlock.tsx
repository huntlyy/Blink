import { Movie } from 'entities/Movie/model/types/types';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';

interface MovieTextBlockProps {
    className?: string;
    data: Movie;
}
export const MovieTextBlock = (props: MovieTextBlockProps) => {
    const { data, className } = props;

    return (
        <div className={classNames('', {}, [className])}>
            <Text
                title={data?.nameRu}
                text={data?.nameEn}
                size={TextSize.M}
            />
            <Text text={`Год: ${data?.year}`} />
            <Text text={`Время: ${data?.filmLength}`} />
            <Text text={`Слоган: ${data?.slogan}`} />
            <Text text={`Возраст: ${data?.ratingAgeLimits}`} />
            <Text text={`Рейтинг: ${data?.ratingKinopoisk}`} />
        </div>
    );
};
