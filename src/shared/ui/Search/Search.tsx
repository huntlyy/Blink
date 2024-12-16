import { FormEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import SearchIcon from 'shared/assets/icons/search-svgrepo-com.svg';
import { Input } from '../Input/Input';
import { Button, ThemeButton } from '../Button/Button';
import cls from './Search.module.scss';

interface SearchProps {
    className?: string;
    classNameInput?: string;
    classNameBtn?: string;
    onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
    placeholder?: string;
    value: string;
    onChange: (str: string) => void;
}

export const Search = (props: SearchProps) => {
    const {
        onChange,
        value,
        className,
        onSubmit,
        placeholder = 'Найти аниме, фильм или сериал',
        classNameBtn,
        classNameInput,
    } = props;

    return (
        <form
            onSubmit={onSubmit}
            className={classNames(cls.Search, {}, [className])}
        >
            <Input
                className={classNames(cls.Input, {}, [classNameInput])}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            >
                <Button
                    type="submit"
                    className={classNames(cls.SubmitBtn, {}, [classNameBtn])}
                    theme={ThemeButton.CLEAR}
                >
                    <SearchIcon />
                </Button>
            </Input>
        </form>
    );
};
