import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HomePage from './components/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
     
      {/* Add padding-top to account for fixed header */}
      <div className="pt-20">
        <HomePage />
      </div>
    </div>
  </React.StrictMode>
);

