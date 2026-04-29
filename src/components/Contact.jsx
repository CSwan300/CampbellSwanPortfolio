import { personalInfo } from '../data/personalInfo';

const Contact = () => {
    return (
        <section id="contact" className="contact-links-section">
            <div className="contact-links-container">
                <h2>Get In Touch</h2>

                <div className="contact-links-grid">
                    <a
                        className="contact-card"
                        href={`mailto:${personalInfo.email}`}
                    >
                        <span>✉️</span>
                        <h3>Email</h3>
                        <span>{personalInfo.email}</span>
                    </a>

                    <a
                        className="contact-card"
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>🔗</span>
                        <h3>GitHub</h3>
                        <span>CSwan300</span>
                    </a>

                    <a
                        className="contact-card"
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>💼</span>
                        <h3>LinkedIn</h3>
                        <span>campbell-swan</span>
                    </a>
                </div>

                <div className="contact-links-cta">
                    <p>
                        I'm always open to discussing new projects, opportunities, and ideas.
                        Feel free to reach out!
                    </p>

                    <div className="contact-links-cta-buttons">
                        <a href={`mailto:${personalInfo.email}`}>
                            Send An Email Or Use The Form Above
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Connect on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;