import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Importoni komponentin kryesor të aplikacionit
import './index.css'; // Importoni stilin global të Tailwind CSS

// Krijoni një root DOM node dhe renditni aplikacionin React atje
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Renderoni aplikacionin tuaj React në root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
