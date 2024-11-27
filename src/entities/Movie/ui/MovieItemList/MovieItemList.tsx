import { ItemMovie } from "entities/Movie/model/types/types";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames"
import { MovieItem} from "../MovieItem/MovieItem";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { ErrorPage } from "widgets/ErrorPage";

interface MovieItemListProps {
    className?: string
    data?: ItemMovie[]
    isLoading?: boolean;
}


let getSkeletons = () => {
    return <div>
        <Skeleton height={100} width={100}/>
            <Skeleton height={100} width={100}/>
            <Skeleton height={100} width={100}/>
            <Skeleton height={100} width={100}/>
            <Skeleton height={100} width={100}/>
    </div>
}
const renderMovie = (movie: ItemMovie) => {
    return <MovieItem data={movie} />
}

export const MovieItemList = memo((props: MovieItemListProps) => {

    const {data, className, isLoading} = props

    if (isLoading) {
            return getSkeletons()
    } 


    return <div className={classNames('', {}, [className])}>
        {data?.length > 0 ? data?.map(renderMovie) : null}
    </div>
})