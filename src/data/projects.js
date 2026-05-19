export const projects = [
    {
        id: 1,
        title: "Bias Auditor",
        description: "A fairness auditing tool detecting algorithmic bias using the Four-Fifths Rule. Features a containerised architecture with 94% test coverage and automated risk scoring.",
        technologies: ["Python", "FastAPI", "Pandas", "Docker", "GitHub Actions"],
        github: "https://github.com/CSwan300/Bias-Auditor",
        demo: null,
        image: "./images/bias.png"
    },
    {
        id: 2,
        title: "Yoga Booking Site",
        description: "Full-stack RBAC system with 270+ Jest tests. Optimized with Mustache templates for 200ms load times and secured via JWT and HTTP-only cookies.",
        technologies: ["Node.js", "Express", "NeDB", "JWT", "Mustache.js", "Jest"],
        github: "https://github.com/CSwan300/YogaBookingSite",
        demo: "https://campbellswanwebdev2courseworklivedemo.onrender.com/",
        image: "./images/Yoga.png"
    },
    {
        id: 3,
        title: "Concurrency Visualiser",
        description: "Interactive Flask dashboard simulating race conditions vs. thread-safe operations using threading.Lock(), validated across multiple Python versions via CI.",
        technologies: ["Python", "Flask", "Threading", "Pytest", "CI/CD"],
        github: "https://github.com/CSwan300/ConcurrencyVisualiser",
        demo: null,
        image: "./images/Concurrency.png"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "Professional responsive portfolio built with a component-based architecture in React and Vite, featuring a dual-theme 'Retro-Terminal' and 'Scottish Highlands' CSS system.",
        technologies: ["React", "Vite", "JavaScript", "CSS", "Vercel"],
        github: "https://github.com/CSwan300/CampbellSwanPortfolio",
        demo: "https://campbellswan.vercel.app/",
        image: "./images/website.png"
    },
    {
        id: 5,
        title: "Weather ML App",
        description: "ML weather prediction model deployed on AWS using Kubernetes (Minikube) and Ansible. Orchestrated end-to-end with Infrastructure as Code (IaC) principles.",
        technologies: ["Python", "Kubernetes", "Docker", "Ansible", "AWS", "scikit-learn"],
        github: "https://github.com/CSwan300/Weather-ML-App",
        demo: null,
        image: "./images/placeholder.png"
    },
    {
        id: 6,
        title: "IEUK 2025 WebLogTool",
        description: "Log analysis engine detecting bot traffic and security anomalies. Generates 9 distinct data visualisations for performance and security metrics.",
        technologies: ["Python", "Matplotlib", "Docker", "Docker Compose"],
        github: "https://github.com/CSwan300/PythonDataProjectTask",
        demo: null,
        image: "./images/log_analysis_report.png"
    },

    {
        id: 8,
        title: "FantasyApp (Scala)",
        description: "Functional programming terminal app using immutable data structures and fuzzy-search logic to analyze 20 weeks of sports player data.",
        technologies: ["Scala 3", "sbt", "Functional Programming"],
        github: "https://github.com/CSwan300/FantasySportsApp",
        demo: null,
        image: "./images/sports.png"
    }
];