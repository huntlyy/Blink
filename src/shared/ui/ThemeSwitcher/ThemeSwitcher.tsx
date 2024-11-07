import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LightIcon from 'shared/assets/icons/sun-icon.svg';
import DarkIcon from 'shared/assets/icons/moon-icon.svg';
import { Button, ThemeButton } from '../Button/Button';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('', {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggleTheme}
            >
                {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
            </Button>
        </div>
    );
};
