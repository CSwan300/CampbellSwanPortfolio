import { personalInfo } from '../data/personalInfo';

const About = () => {
    return (
        <section
            id="about"
            className="py-16 bg-gradient-to-b from-slate-800 to-slate-900 text-white"
        >
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    {/* Left side - Text */}
                    <div className="flex flex-col justify-between bg-slate-700/40 rounded-lg p-6">
                        <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {personalInfo.bio}
                        </p>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-semibold text-purple-300">
                                Skills & Interests
                            </h3>
                            <ul className="grid grid-cols-2 gap-3">
                                {[
                                    'Puzzles',
                                    'Chess',
                                    'Python',
                                    'Rugby',
                                    'Data Analysis',
                                    'Backend Development',
                                    'Problem Solving',
                                    'Git & GitHub',
                                    'Golf',
                                ].map((skill, index) => (
                                    <li
                                        key={index}
                                        className="bg-slate-700 px-4 py-2 rounded-lg text-blue-300 border border-blue-500/30 hover:border-blue-500/60 transition"
                                    >
                                        ✓ {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side - Decorative */}
                    <div className="relative flex">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-xl opacity-20"></div>
                        <div className="relative bg-slate-700 p-8 rounded-lg border border-blue-500/30 flex-1 flex flex-col">
                            <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                                By The Numbers
                            </h3>
                            <div className="space-y-4 flex-1">
                                <div className="flex justify-between items-center pb-4 border-b border-slate-600">
                                    <span className="text-gray-300">Projects Completed</span>
                                    <span className="text-2xl font-bold text-blue-400">10+</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-600">
                                    <span className="text-gray-300">Languages I Am Familiar With</span>
                                    <span className="text-2xl font-bold text-purple-400">8+</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-600">
                                    <span className="text-gray-300">GitHub Repositories</span>
                                    <span className="text-2xl font-bold text-green-400">15+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-300">My Golf Handicap</span>
                                    <span className="text-2xl font-bold text-pink-400">33+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
