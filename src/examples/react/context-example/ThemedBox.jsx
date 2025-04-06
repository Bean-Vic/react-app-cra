// Child component that uses the context
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemedBox = () => {
    const { theme } = useContext(ThemeContext);

    const styles = {
        padding: '1rem',
        backgroundColor: theme === 'dark' ? '#333' : '#eee',
        color: theme === 'dark' ? '#fff' : '#000',
        borderRadius: '8px',
        marginTop: '1rem'
    };

    return <div style={styles}>This box follows the {theme} theme!</div>;
};

export default ThemedBox;
