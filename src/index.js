import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App'
import './index.css';
import SupportAdmin from './components/supportadmin/SupportAdmin';

const root = ReactDOM.createRoot(document.getElementById("root"));
const path = window.location.pathname

root.render(
  <React.StrictMode>
    { path.indexOf('/support') === -1 ? <App /> : <SupportAdmin /> }
  </React.StrictMode>,
  document.getElementById('root')
  
);