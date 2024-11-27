import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import './index.css'; 

// Ensure the DOM is fully loaded before rendering
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');

  if (container) {
    const root = createRoot(container);  // Create root for React app
    root.render(<App />);  // Render the App component
  } else {
    console.error("Error: Container with id 'root' not found!");
  }
});
