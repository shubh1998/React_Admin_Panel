import { Avatar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawerToggle } from '../../redux-thunk/redux/Ham/hamSlice'
import { AppBar } from './header.styles'

export const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ham.open)
  console.log('open', open)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const logoutHandler = () => {
    setAnchorElUser(null)
    console.log('Logout')
  }

  const profileHandler = () => {
    setAnchorElUser(null)
    console.log('Profile')
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

  return (
    <AppBar position='fixed' open={open} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#000000', color: '#ffffff' }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => dispatch(handleDrawerToggle())}
          edge='start'
          sx={{ mr: 2, ...(open && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, textAlign: 'left' }}>
          Admin Panel
        </Typography>
        <Avatar onClick={handleOpenUserMenu} sx={{ p: 0, cursor: 'pointer' }}>PK</Avatar>
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
      </Toolbar>
    </AppBar>
  )
}
