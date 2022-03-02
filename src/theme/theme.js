import { createTheme } from '@mui/material'
import { colors } from './colors/colors'

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
    // primary: {
    //   main: '#0F172A'
    // },
    // error: {
    //   main: '#0F172A'
    // },
    // success: {
    //   main: '#0F172A'
    // }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  drawer: {
    width: 240
  },
  colors: colors,
  drawerWidth: 240
})
