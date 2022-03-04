import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Collapse, List } from '@mui/material'
import { StarBorder } from '@mui/icons-material'
import { CustomListItem } from './CustomListItem'

export const CustomList = ({
  t,
  location,
  list,
  handleDrawerOptions,
  expandedMenuItem
}) => {
  return (
    <List>
      {list.map((item, index) => {
        const NavIcon = item.icon
        if (item.hasNavbar) {
          return (
            <Fragment key={item.key}>
              <CustomListItem
                to={item.subMenus.length ? '' : item.path}
                component={RouterLink}
                onClick={() => handleDrawerOptions(item.label)}
                selected={item.path === location.pathname}
                sx={{
                  color: 'white',
                  backgroundColor: (theme) =>
                    item.path === location.pathname
                      ? `${theme.colors.majorelleBlue} !important`
                      : 'none',
                  '&:hover': {
                    backgroundColor: (theme) =>
                      `${theme.colors.gunmetal} !important`
                  }
                }}
                icon={<NavIcon />}
                text={t(item.label)}
                expandless={
                  item.subMenus.length > 0 &&
                  expandedMenuItem.includes(item.label)
                }
                iconStyle={{
                  '& .MuiSvgIcon-root': {
                    fill: (theme) => theme.colors.white
                  }
                }}
                hasSubMenu={Boolean(item?.subMenus.length)}
              />
              {item.subMenus.length
                ? (
                    item.subMenus.map((subItem) => (
                      <Collapse
                        in={expandedMenuItem.includes(item.label)}
                        timeout='auto'
                        unmountOnExit
                        key={subItem.key}
                      >
                        <List component='div' disablePadding>
                          <CustomListItem
                            sx={{
                              color: 'white',
                              pl: 4,
                              backgroundColor: (theme) => location.pathname.includes(item.path) ? `${theme.colors.majorelleBlue} !important` : 'none',
                              '&:hover': {
                                backgroundColor: (theme) =>
                                `${theme.colors.gunmetal} !important`
                              }
                            }}
                            // selected={subItem.path === location.pathname}
                            isbutton
                            to={subItem.path}
                            component={RouterLink}
                            text={t(subItem.label)}
                            icon={<StarBorder />}
                            hasSubMenu={false}
                            iconStyle={{
                              '& .MuiSvgIcon-root': {
                                fill: (theme) => theme.colors.white
                              }
                            }}
                          />
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
  )
}