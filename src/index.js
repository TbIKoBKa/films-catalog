import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContext from './AppContext';
import ErrorBoundary from './ErrorBoundary';


ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContext />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
