import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-900 text-white overflow-hidden">
            <Header scrollToSection={scrollToSection} />
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Projects />
            <Contact />
            <Resume />
            <Footer scrollToSection={scrollToSection} />
        </div>
    );
}

export default App;