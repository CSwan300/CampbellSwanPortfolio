import React from 'react';
import Hero from '../components/HomePage/Hero.jsx';
import About from '../components/HomePage/About.jsx';
import Projects from '../components/HomePage/Projects.jsx';
import Resume from '../components/HomePage/Contact.jsx';
import ContactForm from '../components/HomePage/Email.jsx';
import Background from '../components/Misc/Background.jsx';

function LandingPage({ scrollToSection }) {
    return (
        <>
            {/* Background stays fixed behind all components */}
            <Background />
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Projects />
            <Resume />
            <ContactForm />
        </>
    );
}

export default LandingPage;