import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
import reportWebVitals from './reportWebVitals';

// Në fund të src/index.js, thirrni reportWebVitals
reportWebVitals();
// Heqja e këtij importi dhe thirrjeje nëse nuk është e nevojshme:
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
