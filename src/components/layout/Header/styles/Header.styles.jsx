import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { IconButton, Menu, MenuItem, Toolbar } from '@mui/material'

const drawerWidth = 240

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  color: theme.colors.black,
  boxShadow: theme.colors.greyShadow,
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

export const StyledMenu = styled(Menu)(({ theme, mt }) => ({
  marginTop: mt || 0
}))

export const StyledMenuItem = styled(MenuItem)(({ theme, width }) => ({
  width: width || 0
}))

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop?.open !== 'open'
})(({ theme, open, mr }) => ({ marginRight: mr || 0, ...(open && { display: 'none' }) }))
