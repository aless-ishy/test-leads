import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ed6c02'
    },
    secondary: {
      main: '#dedede'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontWeight: 700
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'inherit',
          fontWeight: 700
        }
      }
    }
  }
});
