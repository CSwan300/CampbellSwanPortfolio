import { useState, useEffect } from 'react';

const Header = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const sectionElements = Array.from(document.querySelectorAll('section[id]'));
        const seenIds = new Set();

        const dynamicLinks = sectionElements
            .filter(section => {
                if (seenIds.has(section.id)) return false;
                seenIds.add(section.id);
                return true;
            })
            .map(section => ({
                label: section.id.charAt(0).toUpperCase() + section.id.slice(1),
                id: section.id
            }));

        setNavItems(dynamicLinks);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // If you're using React Router, you could also use navigate('/') here
    };

    return (
        <header>
            <nav className="nav-container">
                {/* Logo / Brand - Always links to top */}
                <button
                    onClick={handleLogoClick}
                    className="brand-logo"
                    aria-label="Scroll to top"
                >
                    CJFS
                </button>

                {/* Desktop Navigation */}
                <ul className="desktop-menu">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => scrollToSection(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mobile-menu-toggle"
                        aria-label="Toggle mobile menu"
                    >
                        ☰
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu">
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