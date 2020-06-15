import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //<== is a 'relative import' to the current file
import STORE from './store';
/**
 * Relative imports require developers to specify both 'import' and 'export'.
 */
import './index.css'; //<== was enabled by 'webpack' in 'node_modules'





ReactDOM.render(
  <App />, 
  document.getElementById('root'),
  console.log(STORE), //<== delete when everything is working
  console.log('React.render() is working') //<== delete when everything is working
);