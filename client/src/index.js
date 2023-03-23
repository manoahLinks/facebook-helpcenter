import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { DataContextProvider } from './hooks/dataContext';

ReactDOM.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
  ,
  document.getElementById('root')
);
