import { personalInfo } from '../data/personalInfo';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gradient-to-b from-slate-800 to-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    Get In Touch
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {/* Email */}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="bg-slate-700 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/60 transition text-center hover:transform hover:scale-105 duration-300 block no-underline"
                    >
                        <div className="text-4xl mb-4">✉️</div>
                        <h3 className="text-xl font-semibold mb-2 text-blue-300">Email</h3>
                        <span className="text-gray-300 hover:text-purple-400 transition break-all">
                            {personalInfo.email}
                        </span>
                    </a>

                    {/* GitHub */}
                    <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/60 transition text-center hover:transform hover:scale-105 duration-300 block no-underline"
                    >
                        <div className="text-4xl mb-4">🔗</div>
                        <h3 className="text-xl font-semibold mb-2 text-purple-300">GitHub</h3>
                        <span className="text-gray-300 hover:text-blue-400 transition truncate block">
                            CSwan300
                        </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-700 p-8 rounded-lg border border-blue-500/30 hover:border-purple-500/60 transition text-center hover:transform hover:scale-105 duration-300 block no-underline"
                    >
                        <div className="text-4xl mb-4">💼</div>
                        <h3 className="text-xl font-semibold mb-2 text-green-300">LinkedIn</h3>
                        <span className="text-gray-300 hover:text-green-400 transition truncate block">
                            campbell-swan
                        </span>
                    </a>
                </div>

                {/* Contact Message */}
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-purple-500/50 rounded-lg p-8 text-center">
                    <p className="text-lg text-gray-300 mb-6">
                        I'm always open to discussing new projects, opportunities, and ideas. Feel free to reach out!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                        >
                            Send Me an Email
                        </a>
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border-2 border-purple-500 hover:bg-purple-500/20 rounded-lg font-semibold text-purple-300 transition"
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
