import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/** * Vite's import.meta.glob with { eager: true } immediately
 * imports the files. For CSS, this automatically injects
 * the styles into the <head>.
 */

// Mounts global CSS files (e.g., global.css)
import.meta.glob('./styles/*.css', { eager: true });

// Mounts all component-specific CSS files inside the components folder
import.meta.glob('./styles/components/*.css', { eager: true });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)