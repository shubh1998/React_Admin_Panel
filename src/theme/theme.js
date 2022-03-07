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
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `3px solid ${colors.majorelleBlue}`,
            color: colors.majorelleBlue,
            fontWeight: 800,
            '&:hover': {
              border: `3px solid ${colors.majorelleBlue}`,
              backgroundColor: colors.majorelleBlue,
              color: colors.white
            }
          }
        },
        {
          props: { variant: 'text' },
          style: {
            color: colors.black,
            boxShadow: '0px 2px 10px rgba(103, 103, 103, 0.12), inset 0px -6px 14px rgba(0, 0, 0, 0.12)',
            '&:hover': {
              color: colors.majorelleBlue,
              boxShadow: 'inset 0px 0px 13px rgba(89, 80, 229, 0.27)'
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            minWidth: '200px',
            minHeight: '50px'
          }
        },
        {
          props: { size: 'medium' },
          style: {
            minWidth: '150px',
            minHeight: '40px'
          }
        },
        {
          props: { size: 'small' },
          style: {
            minWidth: '100px',
            minHeight: '30px'
          }
        }
      ]
    }
  },
  palette: {
    primary: {
      main: colors.majorelleBlue,
      dark: colors.majorelleBlue
    }
    // error: {
    //   main: '#0F172A'
    // },
    // success: {
    //   main: '#0F172A'
    // },
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
  drawerWidth: 265
})
