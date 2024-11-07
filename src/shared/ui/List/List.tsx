import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './List.module.scss';

interface List {
    to?: string;
    label: string;
}

export enum ListTheme {
    BLUR = 'blur',
    OUTLINE = 'outline',
}

interface ListProps {
    className?: string;
    list: List[];
    theme?: ListTheme;
    disableHover?: boolean;
}

export const List = (props: ListProps) => {
    const { className, list, theme = ListTheme.BLUR, disableHover } = props;

    if (list?.length < 0) {
        return null;
    }

    const mods: Mods = {
        [cls.disableHover]: disableHover,
    };

    return (
        <ul className={classNames(cls.List, mods, [className])}>
            {list?.map((tag, index) => {
                const { to, label } = tag;

                return (
                    <li
                        className={classNames(cls.item, {}, [cls[theme]])}
                        key={index}
                    >
                        {to ? (
                            <AppLink to={to}>{label}</AppLink>
                        ) : (
                            <span>{label}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
