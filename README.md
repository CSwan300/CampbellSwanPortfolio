<div align="center">

  ![Profile Banner](https://avatars.githubusercontent.com/u/147725350?v=4)

  [![GitHub](https://img.shields.io/badge/GitHub-CSwan300-181717?style=for-the-badge&logo=github)](https://github.com/CSwan300)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/campbell-swan)
  [![Portfolio](https://img.shields.io/badge/Portfolio-Live-00C7B7?style=for-the-badge)](https://campbellswan.vercel.app/)

</div>




# Campbell Swan — Portfolio

Personal portfolio site, live at [campbellswan.dev](https://campbellswan.dev).

## Stack

- **React 18** with React Router v7
- **Vite** for bundling and local dev
- **EmailJS** for the contact form (no backend required)
- **Vercel** for deployment and analytics
- Visual design adapted from a CSS template and customised throughout

## Why React

Most portfolio sites are static HTML/CSS templates — functional, but a single monolithic file with no real structure. Using React here was a deliberate choice to keep the codebase modular (each section is an isolated component) and to get more comfortable with the ecosystem outside of coursework. It also makes the site straightforward to extend: adding a new project card or section doesn't mean hunting through a wall of HTML.

## Design iterations

The CSS went through three full rewrites before landing on the current version:

- **v1** — functional but visually poor; scrapped entirely
- **v2** — better aesthetically but had rendering issues that caused styles to not load correctly in production
- **v3 (current)** — an earlier version included a CSS animated background: two perspective-transformed grid planes (`rotateX`) animating simultaneously, layered with an SVG fractal noise texture and scanline overlay. This caused significant frame-rate issues as the browser was forced to composite on every frame continuously. The animation code is currently commented out pending a fix (likely `will-change: transform` and reducing to a single plane); the static background is used in the meantime without meaningfully affecting the aesthetic

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project structure

```
src/
  components/   # Reusable UI components
  pages/        # Route-level page components
  assets/       # Images and static files
public/         # Favicon and public assets
```

## Deployment

Deployed automatically to Vercel on push to `master`. No manual steps required.

## Contact

[swancampbell3@gmail.com](mailto:swancampbell3@gmail.com) · [linkedin.com/in/campbell-swan](https://www.linkedin.com/in/campbell-swan)
