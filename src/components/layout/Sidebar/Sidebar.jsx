import { Box, Collapse, Divider, List, ListItemText } from '@mui/material'
import React, { Fragment } from 'react'
import routerList from '../../../routes/routerList'
import { Link as RouterLink } from 'react-router-dom'
import { DrawerHeader, StyledDrawer, StyledIconButton, StyledListItem, StyledListItemIcon } from './styles/Sidebar.styles'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { LeftArrowIcon } from '../../ui-kit/icons/iconComponents/LeftArrowIcon'
import { useSidebarController } from './controller/useSidebarController'
import CustomTypography from '../../ui-kit/Typography/CustomTypography'

export const Drawer = ({ children, open, handleDrawerClose }) => {
  return (
    <StyledDrawer anchor='left' variant='persistent' open={open}>
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <CustomTypography
            sx={{ paddingLeft: '15px' }}
            variant='h4'
            value='Admin'
          />
          <StyledIconButton padding='0px' onClick={handleDrawerClose}>
            <LeftArrowIcon />
          </StyledIconButton>
        </DrawerHeader>
        <Divider />

        {children}
      </Box>
    </StyledDrawer>
  )
}

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
    <Drawer open={open} handleDrawerClose={handleDrawerClose}>
      <List>
        {routerList.map((item, index) => {
          const NavIcon = item.icon
          if (item.hasNavbar) {
            return (
              <Fragment key={item.key}>
                <StyledListItem
                  button
                  to={item.subMenus.length ? '' : item.path}
                  component={RouterLink}
                  onClick={() => handleDrawer(item.label)}
                  selected={item.path === location.pathname}
                >
                  <StyledListItemIcon>
                    <NavIcon />
                  </StyledListItemIcon>
                  <ListItemText primary={t(item.label)} />
                  {item.subMenus.length > 0 &&
                    (openCollapse.includes(item.label)
                      ? (
                        <ExpandLess />
                        )
                      : (
                        <ExpandMore />
                        ))}
                </StyledListItem>
                {item.subMenus.length
                  ? (
                      item.subMenus.map((subItem) => (
                        <Collapse
                          in={openCollapse.includes(item.label)}
                          timeout='auto'
                          unmountOnExit
                          key={subItem.key}
                        >
                          <List component='div' disablePadding>
                            <StyledListItem
                              sx={{ pl: 4 }}
                              selected={subItem.path === location.pathname}
                              button
                              to={subItem.path}
                              component={RouterLink}
                            >
                              <StyledListItemIcon>
                                <StarBorder />
                              </StyledListItemIcon>
                              <ListItemText primary={t(subItem.label)} />
                            </StyledListItem>
                          </List>
                        </Collapse>
                      ))
                    )
                  : (
                    <></>
                    )}
              </Fragment>
            )
          }
          return null
        })}
      </List>
    </Drawer>
  )
}
