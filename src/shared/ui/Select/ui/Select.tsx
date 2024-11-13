import Select from 'react-select';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string | number;
    content: string;
}

interface SelectProps {
    onChange: (value: string | number) => void;
    options: SelectOption[];
    name: string;
    defaultValue?: SelectOption;
    value?: SelectOption;
    isOpen?: boolean;
    className?: string;
    readonly?: boolean;
}

export const MySelect = memo((props: SelectProps) => {
    const {
        className,
        options,
        defaultValue = options[0],
        onChange,
        name,
        readonly,
        isOpen = false,
        ...otherProps
    } = props;

    const onChangeHandler = useCallback(
        (newValue: SelectOption | null) => {
            if (newValue) onChange?.(newValue.value);
        },
        [onChange],
    );

    return (
        <Select
            className={classNames(cls.MySelect, {}, [className])}
            classNamePrefix="MySelect"
            defaultValue={defaultValue}
            name={name}
            options={options}
            isSearchable={!readonly}
            onChange={onChangeHandler}
            menuIsOpen={isOpen || undefined}
            {...otherProps}
        />
    );
});
