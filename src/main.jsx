import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ColorModeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorModeProvider>
      <App />
    </ColorModeProvider>
  </React.StrictMode>,
);
