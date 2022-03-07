import React, { Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Collapse, List } from '@mui/material'
import { CustomListItem } from './CustomListItem'
import { CustomTypography } from '../../../ui-kit/atoms/Typography/CustomTypography'
import { colors } from '../../../../theme/colors/colors'

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
        if (item.hasSideBarOption) {
          return (
            <Fragment key={item.key}>
              <CustomTypography align='left' value={t(item.sectionName)} sx={{ fontWeight: 600, textTransform: 'uppercase', display: 'block', padding: '10px 0px 10px 18px' }} color={colors.cornflowerBlue} />
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
                    item.subMenus.map((subItem) => {
                      return (
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
                                backgroundColor: (theme) => location.pathname.includes(subItem.path) ? `${theme.colors.majorelleBlue} !important` : 'none',
                                '&:hover': {
                                  backgroundColor: (theme) =>
                                `${theme.colors.gunmetal} !important`
                                }
                              }}
                              isbutton
                              to={subItem.path}
                              component={RouterLink}
                              text={t(subItem.label)}
                              icon={subItem.icon ? <subItem.icon /> : <></>}
                              hasSubMenu={false}
                              iconStyle={{
                                '& .MuiSvgIcon-root': {
                                  fill: (theme) => theme.colors.white
                                }
                              }}
                            />
                          </List>
                        </Collapse>
                      )
                    })
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
