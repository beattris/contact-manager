import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// connecting font-awesome icon to the index.js file
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// connecting the bootstrap css 
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// connecting the bootstrap js file
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

