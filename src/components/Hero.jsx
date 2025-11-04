import { personalInfo } from '../data/personalInfo';

const Hero = ({ scrollToSection }) => {
    return (
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="text-center">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 animate-fade-in">
                        {personalInfo.name}
                    </h1>

                    {/* Subheading */}
                    <p className="text-xl md:text-3xl text-purple-200 mb-8 animate-fade-in-delay">
                        {personalInfo.title}
                    </p>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Building innovative solutions through code. Passionate about software development,
                        exploring new technologies, and creating meaningful digital experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 border-2 border-purple-400 text-purple-200 rounded-lg font-semibold hover:bg-purple-400/10 transition duration-300"
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Scroll Indicator with native smooth scroll */}
                <div
                    className="flex justify-center mt-16 animate-bounce cursor-pointer"
                    onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.currentTarget.click();
                        }
                    }}
                >
                    <svg className="w-6 h-6 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
                    </svg>
                </div>



            </div>
        </section>
    );
};

export default Hero;
