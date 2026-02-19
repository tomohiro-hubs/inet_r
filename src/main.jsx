import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div style={{ padding: 20, textAlign: 'center' }}>
            <h1>React Works! (Debug Mode)</h1>
            <p>If you see this, React is mounting correctly.</p>
        </div>
        {/*
        <HashRouter>
            <App />
        </HashRouter>
        */}
    </React.StrictMode>
);