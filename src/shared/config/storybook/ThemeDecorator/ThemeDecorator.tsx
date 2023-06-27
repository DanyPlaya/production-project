import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { FC, ReactNode } from 'react';

interface Props{
  children?: ReactNode,
  theme?:Theme
}

export const ThemeDecorator:FC<Props> = ({ children, theme }) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            {children}
        </div>
    </ThemeProvider>

);
