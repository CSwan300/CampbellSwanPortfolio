import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//allows the css files to also be name agnostic
const modules = import.meta.glob('./styles/*.css', { eager: true });

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)