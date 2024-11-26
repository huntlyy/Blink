import { ItemMovie } from "entities/Movie/model/types/types";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames"
import { MovieItem} from "../MovieItem/MovieItem";

interface MovieItemListProps {
    className?: string
    data?: ItemMovie[]
    isLoading?: boolean;
    error?: string
}

const renderMovie = (movie: ItemMovie) => {
    return <MovieItem data={movie} />
}

export const MovieItemList = memo((props: MovieItemListProps) => {

    const {data, className, error, isLoading} = props


    return <div className={classNames('', {}, [className])}>
        {data?.length > 0 ? data?.map(renderMovie) : null}
    </div>
})