import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks/browser';
import { AppProviders } from 'context';

async function deferRender() {
  const {worker} = await import('./mocks/browser.js');
  return worker.start();
};
deferRender().then(()=>{
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <AppProviders>
      <App />
      </AppProviders>
    </React.StrictMode>
  );
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
