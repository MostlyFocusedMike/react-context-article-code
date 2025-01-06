import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ExampleContextProvider from './contexts/ExampleContext/ExampleContextProvider.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ExampleContextProvider>
      <App />
    </ExampleContextProvider>
  </React.StrictMode>,
);
