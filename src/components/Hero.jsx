import { personalInfo } from '../data/personalInfo';
import Background from './Background.jsx';

const Hero = ({ scrollToSection }) => {
    return (
        <section className="hero-section">
            <Background />

            <div className="hero-overlay">
                <div className="hero-content">

                    <h1>{personalInfo.name}</h1>

                    <p className="hero-title">{personalInfo.title}</p>

                    <p className="hero-bio">
                        Building useful things with code. I'm passionate about technology, enjoy
                        experimenting with new tools and frameworks, and love turning ideas into
                        practical, enjoyable digital experiences, and I'm actively looking for
                        internships or placements where I can do more of this on real projects.
                    </p>

                    <div className="hero-ctas">
                        <button onClick={() => scrollToSection('projects')}>
                            View My Work
                        </button>
                        <button onClick={() => scrollToSection('contact')}>
                            Get In Touch
                        </button>
                    </div>

                    <div
                        className="hero-scroll-indicator"
                        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                        aria-label="Scroll down"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
                        </svg>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;