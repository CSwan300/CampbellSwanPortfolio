import React, { useEffect } from 'react';
import { personalInfo } from '../../data/personalInfo.js';

const Contact = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    // Removes class when scrolling away so it triggers again
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleDownload = (e) => {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = `/${personalInfo.resumeFile}`;
        link.download = personalInfo.resumeFile;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="contact" className="resume-section">
            <div className="resume-container">
                <h2 className="reveal">Contact</h2>

                <div className="resume-grid">
                    {/* LEFT: Content builds piece by piece */}
                    <div className="resume-info">
                        <h3 className="reveal reveal-left delay-1">Get in Touch</h3>
                        <p className="reveal reveal-left delay-2">
                            Currently seeking opportunities within the financial or technological sectors
                            for Development roles across Glasgow and Edinburgh. Let's build something efficient together.
                        </p>

                        <div className="resume-details">
                            <div className="resume-detail-block reveal reveal-left delay-3">
                                <h4>Direct Channels</h4>
                                <div className="contact-links-cta-buttons">
                                    <a href={`mailto:${personalInfo.email}`}>Email Me</a>
                                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                </div>
                            </div>

                            <div className="resume-detail-block reveal reveal-left delay-4">
                                <h4>Technical Profiles</h4>
                                <div className="contact-links-cta-buttons">
                                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Resume Box slides in and pops */}
                    <div className="resume-download reveal reveal-right delay-2">
                        <svg className="reveal delay-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        <h3 className="reveal delay-3">Professional Resume</h3>
                        <p className="reveal delay-3">Want a detailed copy of my skills?</p>

                        <button className="resume-download-btn reveal delay-4" onClick={handleDownload}>
                            📥 Download CV
                        </button>

                        <p className="resume-filename reveal delay-5" style={{marginTop: '1rem', fontSize: '0.75rem', opacity: 0.6}}>
                            {personalInfo.resumeFile}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;