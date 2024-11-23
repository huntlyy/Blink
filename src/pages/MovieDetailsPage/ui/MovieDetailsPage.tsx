import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface MovieDetailsPageProps {
    className?: string;
}

const MovieDetailsPage = (props: MovieDetailsPageProps) => {
    const { className } = props;

    return (
        <div className={classNames('', {}, [className])}>MovieDetailsPage</div>
    );
};

export default memo(MovieDetailsPage);
