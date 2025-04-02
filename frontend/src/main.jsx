import { SnackbarProvider } from 'notistack';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
  </BrowserRouter>
);