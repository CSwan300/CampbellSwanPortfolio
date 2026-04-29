import React from 'react'
import ReactDOM from 'react-dom/client'
import { inject } from '@vercel/analytics'
import App from './App.jsx'
//allows the css files to also be name agnostic
const modules = import.meta.glob('./styles/*.css', { eager: true });
// Initialize Vercel Web Analytics
inject()

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)