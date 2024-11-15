import { FilmCard } from 'entities/Film';
import {
    getFilmDetailsData,
    getFilmDetailsError,
    getFilmDetailsIsLoading,
} from 'entities/Film/model/selectors/getFilmDetails';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './MainPage.module.scss'

export default function MainPage() {
    const error = useSelector(getFilmDetailsError);
    let isLoading = useSelector(getFilmDetailsIsLoading);
    const data = useSelector(getFilmDetailsData);



    console.log(data);

    let content;

    if (isLoading = true) {
        content = (
            <>
            <Skeleton className={cls.avatar} width={100} height={100} border="50%" />
            <Skeleton className={cls.title} width={100} height={32} />
            <Skeleton className={cls.skeleton} width={200} height={24} />
            <Skeleton className={cls.skeleton} width="100%" height={100} />
            <Skeleton className={cls.skeleton} width="100%" height={100} />
        </>
        )
    } else if (error) {
        content = (
            <div>...ERROR....</div>
        )
    } else {
        content = (
            // <FilmCard
            //     className=''
            //     countries={data?.countries}
            //     genres={data?.genres}
            //     key={data?.kinopoiskId}
            //     kinopoiskId={data.kinopoiskId}
            //     nameRu={data?.nameRu}
            //     posterUrl={data?.posterUrl}
            //     posterUrlPreview={data?.posterUrlPreview}
            //     ratingKinopoisk={data?.ratingKinopoisk}
            //     year={data?.year}
            // />
            <>Main</>
        )
    }

    return (
        <div>
            {content}
        </div>
    );
}
