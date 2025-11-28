import { personalInfo } from '../data/personalInfo';
import { colors } from '../data/themeConfig';
import { useState, useEffect } from 'react';

const Hero = ({ scrollToSection }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const stored = window.localStorage.getItem('color-scheme');
        const currentTheme = stored === 'light' || stored === 'dark' ? stored : 'light';
        setTheme(currentTheme);

        const handleThemeChange = () => {
            const newTheme = document.documentElement.getAttribute('data-color-scheme');
            setTheme(newTheme);
        };

        window.addEventListener('theme-change', handleThemeChange);
        return () => window.removeEventListener('theme-change', handleThemeChange);
    }, []);

    return (
        <section
            className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden"
            style={{
                backgroundColor: colors.background,
            }}
        >
            {/* Animated Background */}
            <div className={`hero-animated-bg ${theme}`}>
                <div className="hero-blob hero-blob-1"></div>
                <div className="hero-blob hero-blob-2"></div>
                <div className="hero-blob hero-blob-3"></div>
            </div>

            {/* Content */}
            <div className="hero-content max-w-6xl mx-auto px-4 w-full">
                <div className="text-center">
                    <h1
                        className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r animate-fade-in"
                        style={{
                            backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                        }}
                    >
                        {personalInfo.name}
                    </h1>

                    <p
                        className="text-xl md:text-3xl mb-8 animate-fade-in-delay"
                        style={{ color: colors.textSecondary }}
                    >
                        {personalInfo.title}
                    </p>

                    <p
                        className="text-base md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
                        style={{ color: colors.textSecondary }}
                    >
                        Building innovative solutions through code. Passionate about software development,
                        exploring new technologies, and creating meaningful digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition duration-300 transform hover:scale-105"
                            style={{
                                background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryActive})`,
                                color: colors.btnPrimaryText,
                                boxShadow: `0 0 20px rgba(107, 163, 229, 0.3)`,
                            }}
                            onMouseEnter={(e) => e.target.style.boxShadow = `0 0 30px rgba(107, 163, 229, 0.5)`}
                            onMouseLeave={(e) => e.target.style.boxShadow = `0 0 20px rgba(107, 163, 229, 0.3)`}
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 rounded-lg font-semibold transition duration-300"
                            style={{
                                border: `2px solid ${colors.primary}`,
                                color: colors.text,
                                backgroundColor: 'transparent',
                            }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = `rgba(107, 163, 229, 0.1)`}
                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div
                    className="flex justify-center mt-16 animate-bounce cursor-pointer"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.currentTarget.click();
                        }
                    }}
                    style={{ color: colors.primary }}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
