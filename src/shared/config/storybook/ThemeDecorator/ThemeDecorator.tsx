import { Decorator } from '@storybook/react';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {

    document.body.className = theme
    
    return (
        <ThemeProvider initialTheme={theme}>
               <Story />
        </ThemeProvider>
    );
};