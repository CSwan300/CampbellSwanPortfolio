import { personalInfo } from '../data/personalInfo';
import ScotlandBackground from './ScotlandBackground';

const Hero = ({ scrollToSection }) => {
    return (
        <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white min-h-screen flex items-center overflow-hidden">
            {/* Background animation layer */}
            <ScotlandBackground />

            {/* Darker overlay for maximum readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 z-5"></div>

            {/* Content on top */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 animate-fade-in-up drop-shadow-2xl shadow-black/50">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-3xl text-slate-200 mb-8 animate-fade-in-up-delay-1 font-semibold drop-shadow-md">
                        {personalInfo.title}
                    </p>
                    <p className="text-base md:text-lg text-slate-100 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2 drop-shadow-sm">
                        Building innovative solutions through code. Passionate about tech,
                        exploring new technologies, and creating meaningful digital experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="px-8 py-3 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-slate-500/60 transition-all duration-300 transform hover:scale-105 active:scale-95 hover:from-slate-600 hover:via-slate-500 hover:to-slate-400 backdrop-blur-sm"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-3 border-2 border-slate-400 text-slate-100 rounded-xl font-semibold hover:bg-slate-800/50 hover:border-slate-300 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-slate-400/30"
                        >
                            Get In Touch
                        </button>
                    </div>
                    <div
                        className="flex justify-center mt-16 cursor-pointer animate-bounce-subtle"
                        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') e.currentTarget.click();
                        }}
                    >
                        <svg className="w-6 h-6 text-slate-200 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7 7 7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
