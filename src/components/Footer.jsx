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
        <footer>
            <div>
                <div>
                    {/* Brand */}
                    <div>
                        <span>Campbell Swan</span>
                        <p>
                            Building the future through code, suffering and occasionally innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
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
                        <h4>Connect</h4>
                        <ul>
                            <li>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div>
                    <p>
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;