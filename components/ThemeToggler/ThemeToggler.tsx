import React, { useEffect, useState } from 'react';

export default function ThemeToggler() {
    const [themeMode, setThemeMode] = useState<string | undefined>(typeof window !== 'undefined' ? localStorage.getItem('themeMode') : undefined);
    const [theme, setTheme] = useState(themeMode);
    const [toggle, setToggle] = useState(false);

    const toggleThemeHandler = (e) => {
        setTheme(toggle === false ? 'luxury' : 'bumblebee');
        setThemeMode(e.target.value);
        window.localStorage.setItem('themeMode', e.target.value);
        setToggle(!toggle);
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', themeMode);

    }, [themeMode])

    return (
        <div className="flex flex-col justify-center align-baseline">
            <label className="swap swap-rote">
                <input className="toggle"
                    onChange={toggleThemeHandler}
                    value={toggle === false ? 'luxury' : 'bumblebee'}
                    type="checkbox"
                    checked={toggle}
                />
            </label>
        </div>
    );
};

