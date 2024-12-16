import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from './ThemeContext';

export interface UseThemeProps {
    theme?: Theme;
    toggleTheme?: () => void;
}

export function useTheme(): UseThemeProps {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.DARK;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.DARK, toggleTheme };
}
