import {
    ChangeEvent,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readonly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange: (value: string) => void;
    autofocus?: boolean;
    type?: string;
    placeholder?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        onChange,
        autofocus,
        placeholder = '',
        value = '',
        type = 'text',
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref?.current?.focus();
        }
    }, [autofocus]);

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            ref={ref}
            value={value}
            type={type}
            className={classNames(cls.Input, {}, [className])}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlur}
            {...otherProps}
        />
    );
});
