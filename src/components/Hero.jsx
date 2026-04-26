import { personalInfo } from '../data/personalInfo';
import ScotlandBackground from './Background.jsx';

const Hero = ({ scrollToSection }) => {
    return (
        <section className="hero">
            <ScotlandBackground />
            <div className="hero__overlay" />

            <div className="hero__content">
                <div>
                    <h1 className="hero__title animate-fade-in-up">
                        {personalInfo.name}
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up-delay-1">
                        {personalInfo.title}
                    </p>

                    <p className="hero__bio animate-fade-in-up-delay-2">
                        Building useful things with code. I'm passionate about technology, enjoy
                        experimenting with new tools and frameworks, and love turning ideas into
                        practical, enjoyable digital experiences, and I'm actively looking for
                        internships or placements where I can do more of this on real projects.
                    </p>

                    <div className="hero__cta-group animate-fade-in-up-delay-3">
                        <button
                            className="hero__btn-secondary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button
                            className="hero__btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </button>
                    </div>

                    <div
                        className="hero__scroll-indicator animate-bounce-subtle"
                        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.click(); }}
                        aria-label="Scroll down"
                    >
                        <svg className="hero__scroll-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;