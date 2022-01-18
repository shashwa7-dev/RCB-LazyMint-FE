import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { MoralisProvider } from 'react-moralis'


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter> 
     <MoralisProvider appId='e16LQ4lIyMz6YznYzNmCOZbIIHsC1EjtiJlv6Pjb' serverUrl='https://vben0csfn9wi.usemoralis.com:2053/server'>
      <App />
      </MoralisProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
