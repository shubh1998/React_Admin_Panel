import { Drawer, IconButton, ListItem, ListItemIcon } from '@mui/material'
import { styled } from '@mui/material/styles'

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px',
  ...theme.mixins.toolbar
}))

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: theme.drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: theme.drawerWidth,
    boxSizing: 'border-box'
  }
}))

export const StyledIconButton = styled(IconButton)(({ theme, padding }) => ({
  padding: padding || 0
}))

export const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  backgroundColor: selected ? theme.colors.gunmetal : 'none',
  '&:hover': {
    backgroundColor: `${theme.colors.gunmetal} !important`
  }
}))

export const StyledListItemIcon = styled(ListItemIcon)(
  ({ theme, padding, Icon }) => ({
    '& .MuiSvgIcon-root': {
      fill: theme.colors.white
    }
  })
)
