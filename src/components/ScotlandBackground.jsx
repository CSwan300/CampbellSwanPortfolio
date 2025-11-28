import React from 'react';
import './ScottishBackground.css';

export const ScottishBackground = () => {
    return (
        <div className="scottish-bg-absolute">
            {/* Animated sky gradient */}
            <div className="sky-gradient"></div>

            {/* Floating thistles */}
            <div className="thistle thistle-1">🌿</div>
            <div className="thistle thistle-2">🌿</div>
            <div className="thistle thistle-3">🌿</div>
            <div className="thistle thistle-4">🌿</div>

            {/* Animated mountains */}
            <div className="mountains">
                <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice" className="mountain-svg">
                    <defs>
                        <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#8B6F47', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#5A4A3A', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <polygon
                        points="0,300 200,150 400,250 600,100 800,200 1000,80 1200,300 1200,400 0,400"
                        fill="url(#mountainGradient)"
                        className="mountain-peak"
                    />
                </svg>
            </div>

            {/* Animated tartan pattern overlay */}
            {/*<div className="tartan-overlay"></div>*/}

            {/* Celtic spiral decoration */}
            <div className="celtic-spiral">
                <svg width="120" height="120" viewBox="0 0 120 120">
                    <path
                        d="M 60 10 Q 80 30 80 60 Q 80 90 60 100 Q 40 90 40 60 Q 40 30 60 10"
                        stroke="#D4A574"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />
                    <path
                        d="M 60 20 Q 75 35 75 60 Q 75 85 60 95"
                        stroke="#D4A574"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.7"
                    />
                </svg>
            </div>

            {/* Floating particles */}
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>

            {/* Light mist effect */}
            <div className="mist mist-1"></div>
            <div className="mist mist-2"></div>
        </div>
    );
};

export default ScottishBackground;
