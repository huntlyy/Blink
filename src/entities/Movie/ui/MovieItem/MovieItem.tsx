import { memo, useCallback } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { ItemMovie} from "entities/Movie/model/types/types"
import { Text } from "shared/ui/Text/Text"
import { Card } from "shared/ui/Card/Card"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { useNavigate } from "react-router-dom"

interface MovieItemProps {
    className?: string
    data?: ItemMovie
}

export const MovieItem = memo((props: MovieItemProps) => {

    const {className, data} = props
    const navigate = useNavigate()

    const onOpenMovie = useCallback(() => {
        navigate(RoutePath.main + data?.kinopoiskId)
    }, [navigate, data.kinopoiskId])

    const movieGenres = data?.genres.map((item) =>  item.genre).join(', ') || 'Неизвестно'
   const movieCountries = data?.countries.map(item => item.country).join(', ') || 'Неизвестно'

     return <Card onClick={onOpenMovie} src={data?.posterUrlPreview} alt={data?.nameRu}className={classNames('', {}, [className])}>
            <Text text={data?.ratingKinopoisk} />
            <Text text={movieCountries}/>
            <Text text={movieGenres}/>
            <Text title={data?.nameRu }/>
            <Text text={data?.year}/>
     </Card>
})