import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/material/node_modules/@mui/system'
import React from 'react'
import routerList from '../../routes/routerList'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { handleDrawerToggle } from '../../redux-thunk/redux/Ham/hamSlice'
import { DrawerHeader } from './sidebar.styles'

const drawerWidth = 240

export const Sidebar = ({ isDesktopView = true }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ham.open)

  return (
    <Drawer
      anchor='left'
      variant={isDesktopView ? 'permanent' : 'temporary'}
      open={isDesktopView ? true : open}
      ModalProps={{
        keepMounted: !isDesktopView // Better open performance on mobile.
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box'
        },
        // '@media (max-width: 600px)': {
        //   display: isDesktopView ? 'none' : 'block'
        // }
        display: {
          sm: isDesktopView ? 'block' : 'none',
          xs: isDesktopView ? 'none' : 'block'
        }
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <IconButton onClick={() => dispatch(handleDrawerToggle())}>
            {isDesktopView ? <></> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routerList.map((item, index) => {
            const NavIcon = item.icon
            if (item.hasNavbar) {
              return (
                (
                  <ListItem button to={item.path} component={RouterLink} key={item.label} selected={item.path === location.pathname}>
                    <ListItemIcon>
                      <NavIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItem>
                )
              )
            }
            return null
          })}
        </List>
      </Box>
    </Drawer>
  )
}
