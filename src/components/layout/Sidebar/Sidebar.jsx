import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/material/node_modules/@mui/system'
import React, { Fragment } from 'react'
import routerList from '../../../routes/routerList'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawerToggle } from '../../../redux-thunk/redux/Ham/hamSlice'
import { DrawerHeader } from './Sidebar.styles'
import { useTranslation } from 'react-i18next'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { ReactComponent as LeftArrow } from '../../../assets/images/leftArrow.svg'

const drawerWidth = 240

export const Sidebar = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ham.open)
  const handleDrawer = (label) => {
    if (openCollapse.includes(label)) {
      setOpenCollapse((prev) => prev.filter((item) => item !== label))
    } else {
      setOpenCollapse(prev => prev.concat(label))
    }
  }

  const handleDrawerClose = () => {
    dispatch(handleDrawerToggle())
  }

  const { t } = useTranslation()
  const [openCollapse, setOpenCollapse] = React.useState([])

  return (
    <Drawer
      anchor='left'
      variant='persistent'
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
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
            <LeftArrow />
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
                      backgroundColor: item.path === location.pathname ? '#2C3344' : 'none',
                      '&:hover': {
                        backgroundColor: '#2C3344 !important'
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
                                backgroundColor: subItem.path === location.pathname ? '#2C3344' : 'none',
                                '&:hover': {
                                  backgroundColor: '#2C3344'
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
