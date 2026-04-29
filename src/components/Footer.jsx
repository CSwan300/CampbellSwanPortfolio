import { personalInfo } from '../data/personalInfo';

const Footer = ({ scrollToSection }) => {
    const currentYear = new Date().getFullYear();
    const quickLinks = [
        { label: 'About',    id: 'about'    },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact',  id: 'contact'  },
        { label: 'Resume',   id: 'resume'   },
    ];

    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__grid">
                    {/* Brand */}
                    <div>
                        <span className="footer__brand-name">Campbell Swan</span>
                        <p className="footer__brand-tagline">
                            Building the future through code, suffering and occasionally innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="footer__col-title footer__col-title--blue">Quick Links</h4>
                        <ul className="footer__link-list">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        className="footer__link-btn"
                                        onClick={() => scrollToSection(link.id)}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="footer__col-title footer__col-title--purple">Connect</h4>
                        <ul className="footer__link-list">
                            <li>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__link footer__link--blue"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__link footer__link--green"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="footer__link footer__link--purple"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;