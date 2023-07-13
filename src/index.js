import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles/css/main.css";
import reportWebVitals from './reportWebVitals';
import NewApp from './NewApp';
import 'bootstrap-icons/font/bootstrap-icons.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewApp></NewApp>
  </React.StrictMode>
);

reportWebVitals();
