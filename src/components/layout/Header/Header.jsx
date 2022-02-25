import { Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MenuIcon from '@mui/icons-material/Menu'
import { handleDrawerToggle } from '../../../redux-thunk/redux/Ham/hamSlice'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ReactComponent as NotificationIcon } from '../../../assets/images/notification.svg'
import { ReactComponent as ProfileIcon } from '../../../assets/images/profile.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { AppBar } from './header.styles'

export const Header = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en')
  const open = useSelector((state) => state.ham.open)
  const dispatch = useDispatch()

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget)
  }

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null)
  }

  const logoutHandler = () => {
    setAnchorElUser(null)
    localStorage.removeItem('token')
    navigate('/login')
  }

  const profileHandler = () => {
    setAnchorElUser(null)
    navigate('/settings')
  }

  const menuItems = [
    {
      label: 'Profile',
      handler: profileHandler
    },
    {
      label: 'Logout',
      handler: logoutHandler
    }
  ]

  const changeLanguage = (lang) => {
    setAnchorElLanguage(null)
    localStorage.setItem('language', lang)
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  const languageMenuItems = [
    {
      label: 'en'
    },
    {
      label: 'de'
    }
  ]

  const handleDrawer = () => dispatch(handleDrawerToggle())

  return (
    <AppBar
      position='fixed'
      sx={{
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        // backgroundColor: '#000000',
        color: 'black',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
      }}
      color='default'
      open={open}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawer}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={handleOpenLanguageMenu}>
            <NotificationIcon style={{ width: 21, height: 20 }} />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElLanguage}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElLanguage)}
            onClose={handleCloseLanguageMenu}
          >
            {languageMenuItems.map((language) => (
              <MenuItem key={language.label} onClick={() => changeLanguage(language.label)} selected={language.label === selectedLanguage}>
                <Typography textAlign='center'>{language.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <IconButton>
            <NotificationIcon style={{ width: 21, height: 20 }} />
          </IconButton>
          <Button
            color='primary'
            variant='outlined'
            onClick={handleOpenUserMenu}
            startIcon={<ProfileIcon style={{ width: 21, height: 20 }} />}
            endIcon={!anchorElUser ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
          >
            User Admin
          </Button>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {menuItems.map((menuItem) => (
              <MenuItem key={menuItem.label} onClick={() => { menuItem.handler() }}>
                <Typography textAlign='center'>{menuItem.label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  )
}
