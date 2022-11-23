import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as ProviderJotai } from 'jotai';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderJotai> 
      <App /> 
    </ProviderJotai>
   
  </React.StrictMode>
);


