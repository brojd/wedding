import {} from 'dotenv/config';
import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.component';
import './global_styles/index.css';

console.info(process.env)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
