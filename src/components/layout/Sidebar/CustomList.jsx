import React, { Fragment } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Collapse, List, ListItemIcon, ListItemText } from '@mui/material'
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material'
import { useTranslation } from 'react-i18next'
import { CustomListItem } from './CustomListItem'

const CustomList = ({
  list,
  handleDrawer,
  openCollapse
}) => {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <List>
      {list.map((item, index) => {
        const NavIcon = item.icon
        if (item.hasNavbar) {
          return (
            <Fragment key={item.key}>
              <CustomListItem
                isbutton
                to={item.subMenus.length ? '' : item.path}
                component={RouterLink}
                onClick={() => handleDrawer(item.label)}
                selected={item.path === location.pathname}
                sx={{
                  color: 'white',
                  backgroundColor: (theme) => item.path === location.pathname ? theme.colors.gunmetal : 'none',
                  '&:hover': {
                    backgroundColor: (theme) => `${theme.colors.gunmetal} !important`
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
                {item.subMenus.length > 0 &&
                  (openCollapse.includes(item.label)
                    ? (<ExpandLess />)
                    : (
                      <ExpandMore />))}
              </CustomListItem>
              {item.subMenus.length
                ? (item.subMenus.map((subItem) => (
                  <Collapse
                    in={openCollapse.includes(item.label)}
                    timeout='auto'
                    unmountOnExit
                    key={subItem.key}
                  >
                    <List component='div' disablePadding>
                      <CustomListItem
                        sx={{
                          color: 'white',
                          pl: 4
                        }}
                        selected={subItem.path === location.pathname}
                        isbutton
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
                      </CustomListItem>
                    </List>
                  </Collapse>)))
                : (
                  <></>)}
            </Fragment>
          )
        }
        return null
      })}
    </List>
  )
}

export default CustomList
