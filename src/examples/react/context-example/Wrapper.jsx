// wrap everything in the provider
import React, {useContext} from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import ThemedBox from './ThemedBox';

export function Content() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Theme Switcher Example!</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <ThemedBox />
        </div>
    );
}

export function Wrapper() {
    return (
        <ThemeProvider>
            <Content />
        </ThemeProvider>
    )
}
