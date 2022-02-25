import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/material/node_modules/@mui/system'
import React, { Fragment } from 'react'
import routerList from '../../../routes/routerList'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { handleDrawerToggle } from '../../../redux-thunk/redux/Ham/hamSlice'
import { DrawerHeader } from './Sidebar.styles'
import { useTranslation } from 'react-i18next'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'

const drawerWidth = 240

export const Sidebar = ({ isDesktopView = true }) => {
  const location = useLocation()
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ham.open)
  const handleDrawer = (label) => {
    if (openCollapse.includes(label)) {
      setOpenCollapse((prev) => prev.filter((item) => item !== label))
    } else {
      setOpenCollapse(prev => prev.concat(label))
    }
    dispatch(handleDrawerToggle())
  }
  const { t } = useTranslation()
  const [openCollapse, setOpenCollapse] = React.useState([])

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
        backgroundColor: 'red',
        display: {
          sm: isDesktopView ? 'block' : 'none',
          xs: isDesktopView ? 'none' : 'block'
        }
        // '& .MuiPaper-root': {
        //   backgroundColor: (theme) => theme.colors.drawerBackground
        // }
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawer}>
            {isDesktopView ? <></> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routerList.map((item, index) => {
            const NavIcon = item.icon
            if (item.hasNavbar) {
              return (
                <Fragment key={item.key}>
                  <ListItem button to={item.subMenus.length ? '' : item.path} component={RouterLink} selected={item.path === location.pathname} onClick={() => handleDrawer(item.label)}>
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
                            <ListItem button sx={{ pl: 4 }} to={subItem.path} component={RouterLink}>
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
