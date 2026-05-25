import { useState, useEffect } from 'react';

const Header = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [navItems, setNavItems] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to change header styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        setIsMobileMenuOpen(false);
    };

    return (
        // Added dynamic 'scrolled' class
        <header className={isScrolled ? 'scrolled' : ''}>
            <nav className="nav-container">
                <button
                    onClick={handleLogoClick}
                    className="brand-logo"
                    aria-label="Scroll to top"
                >
                    Campbell
                </button>

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
                    <button
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="theme-toggle"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mobile-menu-toggle"
                        aria-label="Toggle mobile menu"
                    >
                        {/* Dynamic icon for menu state */}
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>
            </nav>

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
