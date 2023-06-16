import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './assets/style/index.css';
import { BrowserRouter } from 'react-router-dom';

// MUI
import { ThemeProvider } from '@mui/material'
import { theme } from './mui/theme.js';
import { CacheProvider } from '@emotion/react';
import { cacheRtl } from './mui/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CacheProvider value={cacheRtl}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </CacheProvider>
)
