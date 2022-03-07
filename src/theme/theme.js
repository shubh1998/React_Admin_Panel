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
    MuiTextField: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            width: 103,
            // height: 31,
            borderRadius: 3
          }
        },
        {
          props: { size: 'medium' },
          style: {
            width: 317,
            // height: 46,
            borderRadius: 5
          }
        }
      ]
    },
    MuiSwitch: {
      variants: [
        {
          props: { size: 'medium' },
          style: {
            width: '64px',
            height: '45px',
            '&.MuiSwitch-root': {
              padding: 11
            },
            '& .MuiSwitch-thumb': {
              width: 18,
              height: 18,
              margin: '4px'
            },
            '& .MuiSwitch-track': {
              borderRadius: 10
            }
          }
        },
        {
          props: { size: 'small' },
          style: {
            width: '42px',
            height: '28px',
            '&.MuiSwitch-root': {
              padding: 6
            },
            '& .MuiSwitch-thumb': {
              width: 10,
              height: 10,
              margin: '5px'
            },
            '& .MuiSwitch-track': {
              borderRadius: 15
            }
          }
        },
        {
          props: { size: 'large' },
          style: {
            width: '80px',
            height: '62px',
            '&.MuiSwitch-root': {
              padding: 17
            },
            '& .MuiSwitch-thumb': {
              width: 23,
              height: 23,
              margin: '10px'
            },
            '& .MuiSwitch-track': {
              borderRadius: 16
            }
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: `2px solid ${colors.majorelleBlue}`,
            color: colors.majorelleBlue,
            fontWeight: 800,
            '&:hover': {
              border: `2px solid ${colors.majorelleBlue}`,
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
      light: colors.lightBlue,
      dark: colors.majorelleBlue
    },
    error: {
      main: '#FF0000'
    },
    success: {
      main: '#4BC500'
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
  colors: colors,
  drawerWidth: 265
})
