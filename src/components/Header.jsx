import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/personalInfo';
import { colors } from '../data/themeConfig';

const Header = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem('color-scheme');
        const currentTheme = stored === 'light' || stored === 'dark' ? stored : 'light';
        setTheme(currentTheme);
        setMounted(true);

        const handleThemeChange = () => {
            const newTheme = document.documentElement.getAttribute('data-color-scheme');
            setTheme(newTheme);
        };

        window.addEventListener('theme-change', handleThemeChange);
        return () => window.removeEventListener('theme-change', handleThemeChange);
    }, []);

    const toggleMobileTheme = () => {
        if (!mounted || !theme) return;
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        document.documentElement.setAttribute('data-color-scheme', next);
        window.localStorage.setItem('color-scheme', next);
        window.dispatchEvent(new Event('theme-change'));
    };

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
        { label: 'Resume', id: 'resume' },
    ];

    return (
        <header
            className="fixed top-0 w-full shadow-lg z-50 border-b"
            style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
            }}
        >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo/Name */}
                <div
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r cursor-pointer hover:opacity-80 transition"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    style={{
                        backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                    }}
                >
                    CJFS
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className="font-medium transition duration-300 pb-1"
                                    style={{
                                        color: colors.text,
                                        borderBottom: '2px solid transparent',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.borderBottomColor = colors.primary;
                                        e.target.style.color = colors.primary;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.borderBottomColor = 'transparent';
                                        e.target.style.color = colors.text;
                                    }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                </div>

                {/* Mobile Menu Button + mobile theme toggle */}
                <div className="md:hidden flex items-center gap-4">
                    {mounted && (
                        <button
                            type="button"
                            className="text-2xl transition duration-300 hover:opacity-70"
                            aria-label="Toggle colour mode"
                            onClick={toggleMobileTheme}
                        >
                            {theme === 'light' ? '🌙' : '☀️'}
                        </button>
                    )}
                    <button
                        className="text-2xl font-bold transition duration-300 hover:opacity-70"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                        style={{ color: colors.text }}
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden px-4 pb-4 border-t"
                    style={{
                        backgroundColor: colors.surface,
                        borderColor: colors.border,
                    }}
                >
                    <ul className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="transition duration-300 font-medium w-full text-left py-2 px-2 rounded hover:opacity-70"
                                    style={{ color: colors.text }}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
