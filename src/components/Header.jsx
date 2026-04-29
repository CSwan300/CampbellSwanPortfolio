import { useState, useEffect } from 'react';

const Header = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const navItems = [
        { label: 'About',    id: 'about'    },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact',  id: 'contact'  },
        { label: 'Resume',   id: 'resume'   },
    ];

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <header>
            <nav>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                >
                    SWAN
                </button>

                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div>
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {isMobileMenuOpen && (
                <div>
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
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