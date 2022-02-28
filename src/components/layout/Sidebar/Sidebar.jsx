import { Box, Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import routerList from '../../../routes/routerList'
import { Link as RouterLink } from 'react-router-dom'
import { DrawerHeader } from './styles/Sidebar.styles'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { LeftArrowIcon } from '../../ui-kit/icons/iconComponents/LeftArrowIcon'
import { useSidebarController } from './controller/useSidebarController'

export const Sidebar = () => {
  const {
    location,
    open,
    openCollapse,
    t,
    handleDrawer,
    handleDrawerClose
  } = useSidebarController()

  return (
    <Drawer
      anchor='left'
      variant='persistent'
      open={open}
      sx={{
        width: (theme) => theme.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: (theme) => theme.drawerWidth,
          boxSizing: 'border-box'
        }
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader sx={{
          justifyContent: 'space-between',
          padding: '0px'
        }}
        >
          <Typography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
          >
            Admin
          </Typography>
          <IconButton
            sx={{
              padding: '0px'
            }}
            onClick={handleDrawerClose}
          >
            <LeftArrowIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routerList.map((item, index) => {
            const NavIcon = item.icon
            if (item.hasNavbar) {
              return (
                <Fragment key={item.key}>
                  <ListItem
                    button
                    to={item.subMenus.length ? '' : item.path}
                    component={RouterLink}
                    onClick={() => handleDrawer(item.label)}
                    sx={{
                      backgroundColor: item.path === location.pathname ? (theme) => theme.colors.gunmetal : 'none',
                      '&:hover': {
                        backgroundColor: `${(theme) => theme.colors.gunmetal} !important`
                      }
                    }}
                  >
                    <ListItemIcon sx={{
                      '& .MuiSvgIcon-root': {
                        fill: (theme) => theme.colors.white
                      }
                    }}
                    >
                      <NavIcon />
                    </ListItemIcon>
                    <ListItemText primary={t(item.label)} />
                    {(item.subMenus.length > 0) && (openCollapse.includes(item.label) ? <ExpandLess /> : <ExpandMore />)}
                  </ListItem>
                  {
                    item.subMenus.length
                      ? (item.subMenus.map(subItem => (
                        <Collapse in={openCollapse.includes(item.label)} timeout='auto' unmountOnExit key={subItem.key}>
                          <List component='div' disablePadding>
                            <ListItem
                              sx={{
                                pl: 4,
                                backgroundColor: subItem.path === location.pathname ? (theme) => theme.colors.gunmetal : 'none',
                                '&:hover': {
                                  backgroundColor: `${(theme) => theme.colors.gunmetal} !important`
                                }
                              }}
                              button
                              to={subItem.path}
                              component={RouterLink}
                            >
                              <ListItemIcon sx={{
                                '& .MuiSvgIcon-root': {
                                  fill: (theme) => theme.colors.white
                                }
                              }}
                              >
                                <StarBorder />
                              </ListItemIcon>
                              <ListItemText primary={t(subItem.label)} />
                            </ListItem>
                          </List>
                        </Collapse>)))
                      : <></>
                  }
                </Fragment>
              )
            }
            return null
          })}
        </List>
      </Box>
    </Drawer>
  )
}
