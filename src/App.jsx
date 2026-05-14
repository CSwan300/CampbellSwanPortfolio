import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

// Global Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import LandingPage from './pages/LandingPage';

function App() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Router>
            <Header scrollToSection={scrollToSection} />

            <Routes>
                <Route
                    path="/"
                    element={<LandingPage scrollToSection={scrollToSection} />}
                />

            </Routes>

            <Footer scrollToSection={scrollToSection} />
            <Analytics />
        </Router>
    );
}

export default App;