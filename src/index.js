import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/app.js';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import './fonts/Crimson_Text/CrimsonText-Regular.ttf';
import './fonts/Crimson_Text/CrimsonText-Bold.ttf';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
