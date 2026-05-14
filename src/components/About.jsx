import { personalInfo } from '../data/personalInfo';

const SKILLS = [
    'Puzzles', 'Chess', 'Python', 'Rugby',
    'Data Analysis', 'Backend Development',
    'Problem Solving', 'Git & GitHub', 'Golf',

    // Logical / analytical extensions
    'Critical Thinking', 'Algorithms & Data Structures',
    'Debugging', 'Statistical Analysis',

    // Tech ecosystem
    'APIs & Integration', 'SQL & Databases',
    'Automation Scripting', 'Linux Basics',

    // Strategy / mindset crossover
    'Strategic Planning', 'Pattern Recognition',
    'Decision Making Under Pressure',

    // Sports-adjacent traits
    'Teamwork', 'Discipline', 'Performance Analysis',

    // Creative / exploratory (common with devs + puzzle people)
    'Game Theory', 'Learning New Technologies',
    'Side Project Development'
];

const STATS = [
    { label: 'Projects Completed',          value: '10+' },
    { label: 'Languages I Am Familiar With', value: '8+'  },
    { label: 'GitHub Repositories',          value: '15+' },
    { label: 'My Golf Handicap',             value: '33+' },
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                <h2>About Me</h2>

                <div className="about-grid">

                    {/* Left — bio + skills */}
                    <div className="about-left">
                        <p>{personalInfo.bio}</p>

                        <div className="about-skills">
                            <h3>Skills &amp; Interests</h3>
                            <ul>
                                {SKILLS.map((skill) => (
                                    <li key={skill}>✓ {skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right — image placeholder + stats */}
                    <div className="about-right">
                        {/*the terminal screen and flag thing*/}
                        <div className="about-image-placeholder" />

                        <div className="about-stats">
                            <h3>By The Numbers</h3>
                            <dl>
                                {STATS.map(({ label, value }) => (
                                    <div key={label}>
                                        <dd>{value}</dd>
                                        <dt>{label}</dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;