import { useState } from 'react';

const Header = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'About',    id: 'about'    },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact',  id: 'contact'  },
        { label: 'Resume',   id: 'resume'   },
    ];

    return (
        <header className="header">
            <nav className="header__nav">
                <button
                    className="header__logo"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                >
                    SWAN
                </button>

                <ul className="header__nav-list">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                className="header__nav-btn"
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    className="header__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    ☰
                </button>
            </nav>

            {isMobileMenuOpen && (
                <div className="header__mobile-menu">
                    <ul className="header__mobile-nav-list">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    className="header__nav-btn"
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