import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Import your main App component
import './index.css';     // Import your global CSS file (optional)

const container = document.getElementById('app'); // Get the div with id "app"
const root = createRoot(container); // Create a root element
root.render(<App tab="home" />);    // Render the App component into the root container
