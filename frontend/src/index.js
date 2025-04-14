// Importohet React dhe ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importimi i stilit për aplikacionin tuaj (opsional)
import App from './App'; // Importimi i komponentës kryesore të aplikacionit
import reportWebVitals from './reportWebVitals'; // Për matjen e performancës (opsionale)

// ReactDOM.render përdoret për të ngarkuar aplikacionin në DOM
ReactDOM.render(
  <React.StrictMode>
    <App />  {/* Komponenti kryesor i aplikacionit */}
  </React.StrictMode>,
  document.getElementById('root') // Ky është vendi ku do të shfaqet aplikacioni (shpesh në 'index.html' në 'public' folder)
);

// Opsionale: Përdoret për të monitoruar performancën e aplikacionit tuaj
reportWebVitals();
