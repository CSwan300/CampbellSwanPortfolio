import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import ContactForm from '../components/Email';

function LandingPage({ scrollToSection }) {
    return (
        <>
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Projects />
            <Contact />
            <ContactForm />
            <Resume />
        </>
    );
}

export default LandingPage;