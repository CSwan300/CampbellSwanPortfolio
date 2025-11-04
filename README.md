# Campbell Swan - Portfolio
> https://campbellswan.vercel.app/
A beautiful, responsive, and highly customizable portfolio website built with React.js and Tailwind CSS, featuring a Scotland-inspired design theme.

## 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Features

- **Scotland-Themed Design**: Deep blues (Scottish waters), purples (heather), and greens (highlands) (because im scottish and thought it was funny)
- **Fully Responsive**: Mobile-first design that works perfectly on all devices
- **Interactive Sections**: Smooth scrolling navigation, hover effects, and animations
- **Modular Components**: Clean, reusable React components for easy maintenance
- **Customizable**: Easy-to-update data files for content management
- **Modern Stack**: Built with React, Vite, and Tailwind CSS

## 🎯 Sections Included

1. **Header** - Fixed navigation with smooth scrolling
2. **Hero** - Eye-catching introduction with CTA buttons
3. **About** - Professional bio and skills showcase
4. **Projects** - Portfolio of featured projects with technologies
5. **Contact** - Multiple ways to get in touch
6. **Resume** - Download your resume
7. **Footer** - Quick links and social connections

## 🚀 Quick Start

### Installation

```bash
# 1. Create a new Vite project
npm create vite@latest portfolio -- --template react
cd portfolio

# 2. Install dependencies
npm install

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Setup

1. Replace your `src` directory with all provided component files
2. Replace configuration files (tailwind.config.js, postcss.config.js, vite.config.js)
3. Replace public/index.html with the provided index.html
4. Add CampbellSwanResume.pdf to the public folder

### Development

```bash
npm run dev
```

The site will open at http://localhost:3000

### Build for Production

```bash
npm run build
```

## 📁 File Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── CampbellSwanResume.pdf
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Resume.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   └── themeConfig.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── index.html
```

## 🎨 Customization

### Update Personal Information

Edit `src/data/personalInfo.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile/",
  bio: "Your bio here...",
};
```

### Add/Edit Projects

Edit `src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Tailwind"],
    github: "https://github.com/...",
    demo: "https://...",
  },
  // Add more projects...
];
```

### Customize Colors

Edit `src/data/themeConfig.js`:
```javascript
export const themeConfig = {
  colors: {
    primary: "#1e3a8a",
    secondary: "#7c3aed",
    accent: "#10b981",
    // Modify as needed
  },
};
```

## 🔧 Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **JavaScript ES6+** - Core language

## 📱 Responsive Design

- Mobile: Single column layout with hamburger menu
- Tablet: Two-column layouts
- Desktop: Three-column layouts and enhanced spacing

## 🎯 Key Features

- Smooth scroll navigation
- Mobile hamburger menu
- Hover effects on interactive elements
- Gradient backgrounds with Scotland theme
- Project showcase with technology tags
- Contact information with clickable links
- Resume download section
- Professional footer

## 📝 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to modify and customize this portfolio for your own use!

---

Built with ❤️ in Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿
