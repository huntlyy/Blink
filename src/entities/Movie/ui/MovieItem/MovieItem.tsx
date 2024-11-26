import { memo } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { ItemMovie} from "entities/Movie/model/types/types"
import { Text } from "shared/ui/Text/Text"
import { Card } from "shared/ui/Card/Card"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

interface MovieItemProps {
    className?: string
    data?: ItemMovie
}

export const MovieItem = memo((props: MovieItemProps) => {

    const {className, data} = props

    const movieGenres = data?.genres.map((item) =>  item.genre).join(', ') || 'Неизвестно'
   const movieCountries = data?.countries.map(item => item.country).join(', ') || 'Неизвестно'

     return <Card withOverflow  src={data?.posterUrlPreview} alt={data?.nameRu} to={`${RoutePath.movie_details}/${data?.kinopoiskId}`} className={classNames('', {}, [className])}>
            <Text text={data?.ratingKinopoisk} />
            <Text text={movieCountries}/>
            <Text text={movieGenres}/>
            <Text title={data?.nameRu }/>
            <Text text={data?.year}/>
     </Card>
})