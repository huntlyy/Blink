import { SelectOption } from '../ui/Select';

export const findValueOption = (
    options: SelectOption[],
    value: string | number,
    classicValue?: SelectOption,
): SelectOption | undefined => {
    const foundOption = options.find((option) => option.value === value);
    return foundOption ?? classicValue;
};
