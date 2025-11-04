/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                scotland: {
                    blue: "#1e3a8a",
                    purple: "#7c3aed",
                    green: "#10b981",
                    dark: "#1f2937",
                    light: "#f3f4f6",
                },
            },
            fontFamily: {
                heading: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            animation: {
                "fade-in": "fade-in 0.6s ease-out",
                "fade-in-delay": "fade-in-delay 1.2s ease-out",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in-delay": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "50%": {
                        opacity: "0",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
        },
    },
    plugins: [],
};
