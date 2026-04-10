import { personalInfo } from '../data/personalInfo';

const SKILLS = [
    'Puzzles', 'Chess', 'Python', 'Rugby',
    'Data Analysis', 'Backend Development',
    'Problem Solving', 'Git & GitHub', 'Golf',
];

const STATS = [
    { label: 'Projects Completed',       value: '10+', modifier: 'blue'   },
    { label: 'Languages I Am Familiar With', value: '8+', modifier: 'purple' },
    { label: 'GitHub Repositories',      value: '15+', modifier: 'green'  },
    { label: 'My Golf Handicap',          value: '33+', modifier: 'pink'   },
];

const About = () => {
    return (
        <section id="about" className="portfolio-section about">
            <div className="portfolio-container">
                <h2 className="portfolio-section-title">About Me</h2>

                <div className="about__grid">
                    {/* Left — text */}
                    <div className="about__text-card">
                        <p className="about__bio">{personalInfo.bio}</p>

                        <div>
                            <h3 className="about__skills-heading">Skills &amp; Interests</h3>
                            <ul className="about__skills-list">
                                {SKILLS.map((skill) => (
                                    <li key={skill} className="about__skill-item">
                                        ✓ {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right — stats */}
                    <div className="about__stats-card">
                        <div className="about__stats-glow" />
                        <div className="about__stats-inner">
                            <h3 className="about__stats-heading">By The Numbers</h3>
                            <dl className="about__stats-list">
                                {STATS.map(({ label, value, modifier }) => (
                                    <div key={label} className="about__stat-row">
                                        <dt className="about__stat-label">{label}</dt>
                                        <dd className={`about__stat-value about__stat-value--${modifier}`}>
                                            {value}
                                        </dd>
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