import React from 'react';

import Routes from './routes';
import AppProvider from './hooks';

import './global.css';

export default function App() {
  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}
