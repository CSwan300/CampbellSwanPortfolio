import React, { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../../data/personalInfo.js';

const SKILLS = [
    'Puzzles', 'Chess', 'Python', 'Rugby', 'Data Analysis', 'Backend Development',
    'Problem Solving', 'Git & GitHub', 'Golf', 'Critical Thinking', 'Algorithms',
    'Debugging', 'Statistical Analysis', 'APIs & Integration', 'SQL & Databases',
    'Automation', 'Linux Basics', 'Strategic Planning', 'Pattern Recognition',
    'Decision Making', 'Teamwork', 'Discipline', 'Performance Analysis',
    'Game Theory', 'Learning Tech', 'Side Projects'
];

const STATS = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Languages Familiar', value: '8+' },
    { label: 'GitHub Repos', value: '15+' },
    { label: 'Golf Handicap', value: '33+' },
];

const TERMINAL_STRINGS = [
    "GET /v1/assets/profile_img.png 200",
    "Downloading package 'creativity'...",
    "Extracting 1024 nodes...",
    "STATUS: Optimization complete",
    "sh ./run_analysis.sh",
    "Connection established to 127.0.0.1",
    "Compiling critical_thinking.cpp...",
    "Warning: excessive caffeine detected",
    "Packet received: 64 bytes from root",
    "Executing logic_gate_check...",
    "Injecting side_project_01.exe",
    "Buffer overflow prevented [OK]",
    "Mapping algorithmic_patterns..."
];

const About = () => {
    const sectionRef = useRef(null);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = TERMINAL_STRINGS[Math.floor(Math.random() * TERMINAL_STRINGS.length)];
            // Keep last 25 lines to ensure the box remains filled
            setLogs(prev => [...prev.slice(-24), newLog]);
        }, 150);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-container">
                <h2 className="reveal-text scroll-fade">About Me</h2>

                <div className="about-grid">
                    <div className="about-left scroll-fade">
                        <p className="reveal-fade">{personalInfo.bio}</p>

                        <div className="about-skills">
                            <h3 className="reveal-fade">Skills &amp; Interests</h3>
                            <ul>
                                {SKILLS.map((skill, index) => (
                                    <li
                                        key={skill}
                                        style={{ transitionDelay: `${index * 40}ms` }}
                                        className="skill-item"
                                    >
                                        <span>✓</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="about-right scroll-fade">
                        <div className="about-image-placeholder reveal-right">
                            <div className="terminal-body">
                                {logs.map((log, i) => (
                                    <div key={i} className="terminal-line">
                                        <span className="terminal-prompt">{">"}</span> {log}
                                    </div>
                                ))}
                                <div className="terminal-cursor" />
                            </div>
                        </div>

                        <div className="about-stats">
                            <h3 className="reveal-fade">By The Numbers</h3>
                            <dl>
                                {STATS.map(({ label, value }, index) => (
                                    <div
                                        key={label}
                                        className="stat-item"
                                        style={{ transitionDelay: `${(index + 5) * 100}ms` }}
                                    >
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