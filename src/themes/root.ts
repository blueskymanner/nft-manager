import { createTheme } from '@mui/material/styles';

let theme = createTheme();

theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#7f79b7',
      main: '#5F58A5',
      dark: '#423d73',
      contrastText: '#fff'
    },
    secondary: {
      light: '#c557cb',
      main: '#B72EBE',
      dark: '#802085',
      contrastText: '#fff'
    },
    text: {
      primary: '#333',
      secondary: '#4F4F4F',
      disabled: '#828282'
    },
    divider: '#E0E0E0',
    grey: {
      100: '#F2F2F2',
      800: '#4E4E4E',
      900: '#1A1A1A'
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '3.75rem', // 60
      fontWeight: 700
    },
    h2: {
      fontSize: '3rem', // 48
      fontWeight: 700
    },
    h3: {
      fontSize: '2.25rem', // 36
      fontWeight: 700
    },
    h4: {
      fontSize: '1.875rem', // 30
      fontWeight: 700
    },
    h5: {
      fontSize: '1.5rem', // 24
      fontWeight: 700
    },
    h6: {
      fontSize: '1.25rem', // 20
      fontWeight: 700
    },
    body2: {
      lineHeight: '21px'
    },
    subtitle1: {
      fontWeight: 500
    },
    button: {
      fontSize: '1rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontSize: '1rem'
        }
      }
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          marginBottom: theme.spacing(4)
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    }
  }
});

export default theme;
