import React, { useState, useEffect } from 'react';

const Background = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            setTheme(currentTheme || 'dark');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);

    // Completely skip rendering the grid on light mode
    if (theme === 'light') {
        return <div className="background-container light-mode" />;
    }

    return (
        <div className="background-container">
            <div className="bg-texture" />
            <div className="perspective-wrapper">
                <div className="grid-plane top-plane" />
                <div className="grid-plane bottom-plane" />
            </div>
            {/* Optional scanline for extra texture */}
            <div className="scanlines" />
        </div>
    );
};

export default Background;