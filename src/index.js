import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { DAppProvider } from '@usedapp/core'


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter> 
     <DAppProvider>
      <App />
      </DAppProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
