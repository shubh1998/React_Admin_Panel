import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#0F172A',
          color: '#fff',
          fill: '#fff'
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#0F172A'
    },
    error: {
      main: '#0F172A'
    },
    success: {
      main: '#0F172A'
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  drawer: {
    width: 240
  },
  colors: {
    drawerBackground: '#0F172A',
    white: '#fff',
    layout: '#E5E5E5'
  }
})

export default theme
