import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '../src/hooks/theme';
import { AuthProvider } from '../src/hooks/auth';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

