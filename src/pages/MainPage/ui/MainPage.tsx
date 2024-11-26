import { ItemMovie } from 'entities/Movie';
import { memo } from 'react';

interface MainPageProps {
    className?: string
    data?: ItemMovie[]
}

const MainPage = (props: MainPageProps) => {
    return <div>MainPage</div>;
};

export default memo(MainPage);
