import { IconButton, Menu, MenuItem, styled } from '@mui/material'

export const StyledMenu = styled(Menu)(({ theme, mt }) => ({
  marginTop: mt || 0
}))

export const StyledMenuItem = styled(MenuItem)(({ theme, width }) => ({
  width: width || 0,
  '&.MuiMenuItem-root': {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.light
  }
}))

export const StyledIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop?.open !== 'open'
})(({ theme, open, mr }) => ({ marginRight: mr || 0, ...(open && { display: 'none' }) }))
