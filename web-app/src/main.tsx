import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';
import { LeadContextProvider } from '@/contexts/lead-context';
import { theme } from '@/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <LeadContextProvider>
        <App />
      </LeadContextProvider>
    </ThemeProvider>
  </StrictMode>
);
