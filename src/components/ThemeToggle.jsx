import React, { useEffect, useState } from 'react';
import { colors } from '../data/themeConfig';

const STORAGE_KEY = 'color-scheme';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);

        if (stored === 'light' || stored === 'dark') {
            setTheme(stored);
            document.documentElement.setAttribute('data-color-scheme', stored);
        } else {
            const prefersDark =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches;

            const initialTheme = prefersDark ? 'dark' : 'light';
            setTheme(initialTheme);
            document.documentElement.setAttribute('data-color-scheme', initialTheme);
        }

        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (!mounted || !theme) return;

        const next = theme === 'light' ? 'dark' : 'light';

        setTheme(next);
        document.documentElement.setAttribute('data-color-scheme', next);
        window.localStorage.setItem(STORAGE_KEY, next);
        window.dispatchEvent(new Event('theme-change'));
    };

    if (!mounted) return null;

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="font-medium transition duration-300 px-4 py-2 rounded-lg"
            style={{
                backgroundColor: colors.secondary,
                color: colors.text,
                border: `1px solid ${colors.border}`,
            }}
            aria-label="Toggle colour mode"
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.secondaryHover;
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.secondary;
            }}
        >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;
