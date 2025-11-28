import { personalInfo } from '../data/personalInfo';

const Footer = ({ scrollToSection }) => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' },
        { label: 'Resume', id: 'resume' },
    ];

    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white border-t border-blue-500/30">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
                            Campbell Swan
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Building the future through code, suffering and occasionally innovation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 hover:text-purple-400 transition"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-purple-300 mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-green-400 transition"
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="text-gray-400 hover:text-purple-400 transition"
                                >
                                    Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Built With */}
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} {personalInfo.name}. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
