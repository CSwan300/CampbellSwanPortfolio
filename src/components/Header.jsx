import { useState } from 'react';
import { personalInfo } from '../data/personalInfo';

const Header = ({ scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
        { label: 'Resume', id: 'resume' },
    ];

    return (
        <header className="fixed top-0 w-full bg-slate-900 text-white shadow-lg z-50">
            <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo/Name */}
                <div
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    CJFS
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className="hover:text-purple-400 transition duration-300 font-medium"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-800 px-4 pb-4">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => {
                                        scrollToSection(item.id);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="hover:text-purple-400 transition duration-300 font-medium"
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
