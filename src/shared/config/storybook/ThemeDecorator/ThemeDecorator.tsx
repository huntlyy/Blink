import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
    
    return (
        <Story />
    );
};