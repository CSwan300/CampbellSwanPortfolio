import { personalInfo } from '../data/personalInfo';

const SKILLS = [
    'Puzzles', 'Chess', 'Python', 'Rugby',
    'Data Analysis', 'Backend Development',
    'Problem Solving', 'Git & GitHub', 'Golf',
];

const STATS = [
    { label: 'Projects Completed',       value: '10+'   },
    { label: 'Languages I Am Familiar With', value: '8+' },
    { label: 'GitHub Repositories',      value: '15+'  },
    { label: 'My Golf Handicap',          value: '33+'   },
];

const About = () => {
    return (
        <section id="about">
            <div>
                <h2>About Me</h2>

                <div>
                    {/* Left — text */}
                    <div>
                        <p>{personalInfo.bio}</p>

                        <div>
                            <h3>Skills &amp; Interests</h3>
                            <ul>
                                {SKILLS.map((skill) => (
                                    <li key={skill}>
                                        ✓ {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right — stats */}
                    <div>
                        <div />
                        <div>
                            <h3>By The Numbers</h3>
                            <dl>
                                {STATS.map(({ label, value }) => (
                                    <div key={label}>
                                        <dt>{label}</dt>
                                        <dd>
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