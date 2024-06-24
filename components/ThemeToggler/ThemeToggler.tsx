import React, { useEffect, useState } from 'react';

export default function ThemeToggler() {
    // Simplified to use a single state for theme management.
    const [themeMode, setThemeMode] = useState<string>('luxury');

    useEffect(() => {
        // Initialize themeMode from localStorage or default to 'luxury'
        const storedThemeMode = typeof window !== 'undefined' ? localStorage.getItem('themeMode') : 'luxury';
        setThemeMode(storedThemeMode || 'luxury');
        document.querySelector('html').setAttribute('data-theme', storedThemeMode);
    }, []);

    const toggleThemeHandler = () => {
        const newTheme = themeMode === 'luxury' ? 'bumblebee' : 'luxury';
        setThemeMode(newTheme);
        window.localStorage.setItem('themeMode', newTheme);
        document.querySelector('html').setAttribute('data-theme', newTheme);
    }

    return (
        <div className="flex flex-col justify-center align-baseline">
            <label className="swap swap-rotate">
                <input className="toggle"
                    onChange={toggleThemeHandler}
                    value={themeMode}
                    type="checkbox"
                    checked={themeMode === 'bumblebee'}
                />
            </label>
        </div>
    );
};