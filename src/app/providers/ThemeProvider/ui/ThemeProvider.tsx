import { ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "../lib/ThemeContext";

export interface ThemeProviderProps {
  children?: ReactNode;
  initialTheme?: Theme
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.DARK;

export function ThemeProvider(props: ThemeProviderProps) {

    const { children, initialTheme } = props;

    const [theme, setTheme] = useState<Theme>(defaultTheme || initialTheme || Theme.DARK);


    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}
