import { useState, useEffect } from 'react';
import { personalInfo } from '../data/personalInfo';

const Footer = ({ scrollToSection }) => {
    const currentYear = new Date().getFullYear();
    const [dynamicLinks, setDynamicLinks] = useState([]);

    useEffect(() => {
        const sectionElements = Array.from(document.querySelectorAll('section[id]'));
        // track the ids seen already if not it sometimes will dupe
        const seenIds = new Set();

        const links = sectionElements
            .filter(section => {
                if (seenIds.has(section.id)) {
                    return false;
                }
                seenIds.add(section.id);
                return true;
            })
            .map(section => ({
                // Formats the ID: 'about-me' -> 'About-me'
                label: section.id.charAt(0).toUpperCase() + section.id.slice(1),
                id: section.id
            }));

        setDynamicLinks(links);
    }, []);

    return (
        <footer>
            <div className="footer-container">

                <div className="footer-top">

                    {/* Brand / Intro */}
                    <div className="footer-brand">
                        <span>{personalInfo.name || "Campbell Swan"}</span>
                        <p>
                            Building the future through code, suffering and occasionally innovation.
                        </p>
                    </div>

                    {/* Auto-Generated Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {dynamicLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="footer-link-btn"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social/Connect */}
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <ul>
                            <li>
                                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${personalInfo.email}`}>
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <hr />

                <div className="footer-bottom">
                    <p>
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;