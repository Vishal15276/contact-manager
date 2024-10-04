import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';  // Import global styles
import App from './App.jsx';
import './Navbar.css';
import './AddContact.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
