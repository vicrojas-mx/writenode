import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SkeletonTheme>
       <App />
    </SkeletonTheme>  
    </BrowserRouter>
  </React.StrictMode>
);