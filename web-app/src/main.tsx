import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { theme } from './theme.ts';
import { ThemeProvider } from '@mui/material/styles';
import { LeadContextProvider } from './contexts/lead-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LeadContextProvider>
        <App />
      </LeadContextProvider>
    </ThemeProvider>
  </StrictMode>
);
