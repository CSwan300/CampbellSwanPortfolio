import React, { useEffect, useState } from 'react';
import { personalInfo } from '../../data/personalInfo.js';
import Background from '../Misc/Background.jsx';

const Hero = ({ scrollToSection }) => {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section">
            <Background />

            <div className="hero-overlay">
                <div
                    className="hero-content"
                    style={{ '--scroll': scrollOffset }}
                >
                    <h1 className="hero-name">{personalInfo.name}</h1>

                    <p className="hero-title">{personalInfo.title}</p>

                    <div className="hero-bio-wrap">
                        <p className="hero-bio">
                            Software Engineer focused on building robust full-stack applications from the ground up. I approach architecture the way I approach my golf swing: with patience, repetition, and the quiet understanding that it’ll probably take a few attempts.
                        </p>
                    </div>

                    <div className="hero-ctas">
                        <button
                            className="btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button
                            className="btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
