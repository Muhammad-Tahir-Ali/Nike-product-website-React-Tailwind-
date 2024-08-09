import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
