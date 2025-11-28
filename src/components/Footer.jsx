import { personalInfo } from '../data/personalInfo';
import { colors, spacing } from '../data/themeConfig';

const Footer = ({ scrollToSection }) => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
        { label: 'Resume', id: 'resume' },
    ];

    return (
        <footer
            className="text-white border-t"
            style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
            }}
        >
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3
                            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r mb-2"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.primaryHover})`,
                            }}
                        >
                            Campbell Swan
                        </h3>
                        <p className="text-sm" style={{ color: colors.textSecondary }}>
                            Building the future through code, suffering and occasionally innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="hover:text-purple-400 transition"
                                        style={{ color: colors.textSecondary }}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 transition"
                                    style={{ color: colors.textSecondary }}
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-green-400 transition"
                                    style={{ color: colors.textSecondary }}
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="hover:text-purple-400 transition"
                                    style={{ color: colors.textSecondary }}
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '32px' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm" style={{ color: colors.textSecondary }}>
                            © {currentYear} {personalInfo.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
